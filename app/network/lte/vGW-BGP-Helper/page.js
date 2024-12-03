"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import TerminalCard from "@/components/TerminalCard"

export default function VGWBGPHelperPage() {
  return (
    <div className="p-6 w-full">
      <div className="w-full overflow-hidden">
        <Breadcrumb className="mb-6 w-full overflow-hidden">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem className="break-all">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbLink href="/network">Network</BreadcrumbLink>
            </BreadcrumbItem>
           
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbPage>vGW BGP Helper</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">vGW BGP Helper</h1>

          <nav className="space-y-2">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Overview</li>
              <li>Problem</li>
              <li>Solution</li>
              <li>Details</li>
              <li>Example DHCP config</li>
              <li>dhcpevent</li>
              <li>PostgreSQL</li>
              <li>BGP update</li>
              <li>ExaBGP</li>
              <li>advertise</li>
              <li>Summary</li>
            </ul>
          </nav>

          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              LTE PDN (packet data network) GW is the point of interconnect between the EPC and the external IP networks. The ZTE vGW (virtual gateway) is a virtualized x86-based gateway solution which provides PDN services within the network.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The PDN support the common broadband subscriber aggregation model wherein IP subnet allocation(s) can be utilized across multiple gateways for the purposes of address conservation, gateway failover, load balancing, etc. End-user host routes (/32) are advertised into the upstream network, and aggregated on the aggregation router.
            </p>
          </section>

          <section id="problem" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Problem</h2>
            <p className="text-gray-700 dark:text-gray-300">
              ZTE&apos;s virtual gateway platform does not currently support the need-dyn-route functionality required for advertising host routes to the upstream network when allocating IP addresses assigned via DHCP.
            </p>
          </section>

          <section id="solution" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Solution</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Beamspeed has developed an workaround wherein the route update responsiblity is moved from the vGW to the Beamspeed network. It is based on work from Jan-Piet Mens.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              It works by utilzing ISC DHCP Events (man 5 dhcpd.conf) which happen on lease commit, release, or expiry. When an event occurs the server processes a series of configured statements; one of which is execute() which allows the execution of an external process.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The DHCP server executes a script containing the lease event type, end-user IP, and IP address of the DHCP relay agent (or vGW the request was received from). This in turn triggers a BGP announcement toward the vGW&apos;s usptream router containing a host route for the leased IP, and the next-hop set to the IP of the vGW.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The flow is as follows:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              DHCP Event --{`>`} Save to database --{`>`} DB notification --{`>`} Advertise route
            </pre>
            <p className="text-gray-700 dark:text-gray-300">
              This scheme effectively achieves the same IP mobility, failover, subnet sharing, etc that would be realized if the route update functionality existed natively in the vGW.
            </p>
          </section>

          <section id="details" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Details</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The process first starts with the DHCP server. The server first must be configured to execute() a process upon one lease event. Below is an example DHCP configuration.
            </p>
          </section>

          <section id="dhcp-config" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Example DHCP config</h2>
            <TerminalCard>{`subnet 192.0.2.0 netmask 255.255.250.0 {
    option routers 192.0.2.1;
    option subnet-mask 255.255.255.0;
    ...

    # Customer's gateway / relaying gateway
    set cgiaddr = binary-to-ascii(10,8, ".", packet(24,4));

    # Leased IP address
    set clip = binary-to-ascii(10, 8, ".", leased-address);

    # Events
    on commit {
      execute("/usr/local/sbin/dhcpevent", "commit", clip, cgiaddr);
    }
    on release {
      execute("/usr/local/sbin/dhcpevent", "release", clip, cgiaddr);
    }
    on expiry {
      execute("/usr/local/sbin/dhcpevent", "expire", clip, cgiaddr);
    }
}`}</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              The dhcpevent program is executed on lease event.
            </p>
            <TerminalCard>{`/usr/local/sbin/dhcpevent commit,192.0.2.1,198.51.100.2`}</TerminalCard>
            
          </section>

          <section id="dhcpevent" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">dhcpevent</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This script&apos;s sole responsiblity is to insert / update a database entry for the leased IP, and record the vGW where the IP currently resides.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The source code for this program my be found in Beamspeed&apos;s Git repo at gitlab.beamspeed.net/blake/dhcp-bgp-advertise.
            </p>
          </section>

          <section id="postgresql" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">PostgreSQL</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Postgres is the cornerstone of the BGP route update program. Besides providing persistent storage for the IP address to gateway mappings, it serves as an asynchronous message bus to notify the program responsible for announcing or withdrawing BGP updates. It does this through a combination of the PostgreSQL PL/pgSQL, Trigger, and NOTIFY features.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              A PL/pgSQL function called notify_trigger() is defined which executes a NOTIFY (pg_notify()) event to the channel &quot;location_update&quot; with a payload containing the route action to perform, the leased IP, and the nexthop.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The function notify_trigger is as follows:
            </p>
            <TerminalCard>{`CREATE FUNCTION notify_trigger() RETURNS TRIGGER
AS $$

  DECLARE

  BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
      IF (TG_OP = 'UPDATE' AND NEW.enable = FALSE) THEN
        PERFORM pg_notify('location_update', 'withdraw,' || OLD.ip || ',' || OLD.nexthop);
      ELSE
        PERFORM pg_notify('location_update', 'announce,' || NEW.ip || ',' || NEW.nexthop);
      END IF;

      RETURN NEW;
    ELSIF (TG_OP = 'DELETE') THEN
      PERFORM pg_notify('location_update', 'withdraw,' || OLD.ip || ',' || OLD.nexthop);
      RETURN OLD;
    END IF;
  END;

$$ LANGUAGE plpgsql;`}</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              This function is executed automatically by the database after INSERT, UPDATE, or DELETE by attaching the following TRIGGER.
            </p>
           
              <TerminalCard>{`CREATE TRIGGER location_trigger AFTER INSERT OR UPDATE OR DELETE
ON locations
FOR EACH ROW
EXECUTE PROCEDURE notify_trigger();`}</TerminalCard>
           
          </section>

          <section id="bgp-update" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">BGP update</h2>
            <p className="text-gray-700 dark:text-gray-300">
              BGP updates are handled by the advertise program & ExaBGP. Together these programs work to announce or withdraw BGP routes to the network.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Source for the &apos;advertise&apos; program may also be found in the &quot;dhcp-bgp-advertise&quot; repositoriy.
            </p>
          </section>

          <section id="exabgp" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">ExaBGP</h2>
            <p className="text-gray-700 dark:text-gray-300">
              ExaBGP handles the actual BGP updates within the network. Within the BGP neighbor configuration is a process stanza which executes the advertise program. ExaBGP executes this process wherein it reads from STDIN API commands with actions to perform such as route announcements or withdraws.
            </p>
           
              <TerminalCard>{`neighbor 203.0.113.200 {
  description "route reflector";
  router-id 203.0.113.10;
  local-address 203.0.113.10;
  local-as 65002;
  peer-as 65002;
  hold-time 180;

  process adv-vgw-routes {
    run /usr/local/etc/exabgp/advertise;
  }`} </TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              &apos;advertise&apos; runs in a loop, and therefore only terminates at the request of ExaBGP.
            </p>
          </section>

          <section id="advertise" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">advertise</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The program flow is as follows:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`Read active routes from DB --> print to STDOUT -->
LISTEN for updates --> print to STDOUT on update
      |                             |
      |                             |
      ------------------------------|`}</pre>
            <p className="text-gray-700 dark:text-gray-300">
              Notifcations received from PostgreSQL contain all the information necessary to facilitate the route announcement. The program simply listens for these notification, and performs the desired action by printing the appropriate ExaBGP API command. For example:
            </p>
            <TerminalCard>{`announce route 192.0.2.1/32 next-hop 198.51.100.2`}</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              Traffic to the host is now properly routed from the upstream aggregation route to the correct virtual gateway thus successfully achieving the same functionality that would be realized if the BGP update function exited in the vGW.
            </p>
          </section>

          <section id="summary" className="space-y-4">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This concludes the workaround that was developed. For the production deployment, Beamspeed has two virtual machines (FreeBSD Jails) on separate physical hosts running ExaBGP & the route update program. DHCP & PostgreSQL presently operate on a single machine.
            </p>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
