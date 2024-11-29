"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function LinksysATAProvisioningPage() {
  return (
    <div className="p-6 w-full">
      <div className="w-full overflow-hidden">
        <Breadcrumb className="mb-6 w-full overflow-hidden">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="whitespace-nowrap">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/voip" className="whitespace-nowrap">VOIP</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="whitespace-nowrap">Linksys ATA Provisioning</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold whitespace-normal dark:text-white">Linksys ATA Provisioning</h1>

          <p className="text-gray-700 dark:text-gray-300 whitespace-normal">
            Below are instructions for provisioning a SIP account & Linksys SIP ATA for hosted VoIP services on the Beamspeed network.
          </p>

          <div className="space-y-4 w-full overflow-hidden">
            <h2 className="text-2xl font-semibold whitespace-normal dark:text-white">Table of Contents</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <a href="#create-voip" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Creating VoIP account on PBX
                </a>
                <ul className="list-disc pl-8 mt-2 space-y-2">
                  <li>
                    <a href="#find-number" className="hover:text-blue-600 dark:hover:text-blue-400">Find available number</a>
                  </li>
                  <li>
                    <a href="#generate-password" className="hover:text-blue-600 dark:hover:text-blue-400">Generate password</a>
                  </li>
                  <li>
                    <a href="#create-account" className="hover:text-blue-600 dark:hover:text-blue-400">Create account in Asterisk / FreePBX</a>
                  </li>
                  <li>
                    <a href="#add-auth" className="hover:text-blue-600 dark:hover:text-blue-400">Add authentication credentials to VoIP Prov</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#configure-ata" className="hover:text-blue-600 dark:hover:text-blue-400">Configure Linksys ATA</a>
              </li>
            </ul>
          </div>

          <section id="create-voip" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Creating VoIP account on PBX</h2>

            <div className="space-y-6">
              <div id="find-number" className="space-y-4">
                <h3 className="text-xl font-medium scroll-mt-16 dark:text-gray-200">Find available number</h3>
                <p className="text-gray-700 dark:text-gray-300">Use Beamspeed app to find DIDs</p>
              </div>

              <div id="generate-password" className="space-y-4">
                <h3 className="text-xl font-medium scroll-mt-16 dark:text-gray-200">Generate password</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use Automated Password Generator (APG) Linux Command.
                  <br />
                  
                  <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                    sudo apt install apg
                    <br />
                    <br />
                    apg -a 1 -M N -m 20 -n 1
                  </div>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Algorithm: Pronounceable</li>
                  <li>Symbol sets: all yes</li>
                  <li>Min password length: 20</li>
                  <li>Max password length: 20</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">Click 'Generate Passwords' to create password list.</p>
              </div>

              <div id="create-account" className="space-y-4">
                <h3 className="text-xl font-medium scroll-mt-16 dark:text-gray-200">Create account in Asterisk / FreePBX</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-500">Navigate to <a href="https://pbx.beamspeed.net/admin/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">pbx.beamspeed.net/admin/</a>.</p>
                  <p className="text-gray-700 dark:text-gray-500">Login with user credentials.</p>
                  <p className="text-gray-700 dark:text-gray-500">Click on Applications drop-down menu, then select <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Extensions</span>.</p>
                  <p className="text-gray-700 dark:text-gray-500">Select 'Generic SIP Device' as the device type, and hit <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Submit</span>.</p>
                </div>
                <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Add the phone number to <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">User Extension</span>.</li>
                  <li>Set <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Display Name</span> to something informative</li>
                  <li>Set <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Outbound CID</span> to "Name &lt;Number&gt;"</li>
                  <li>Set <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Outbound Concurrency Limit</span> to 4.</li>
                  <li>Set <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">DID Description</span> to Display Name value</li>
                  <li>Set <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Add Inbound DID</span> to phone number</li>
                  <li>Secret must be set to password</li>
                  <li>If device is on public IP, NAT is <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">No - RFC3581</span>. If behind router, set NAT to <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Yes</span>.</li>
                  <li>Click <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Submit</span> to create account in FreePBX</li>
                  <li>Click <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">Apply Changes</span> in top menu to generate Asterisk config files, and reload Asterisk</li>
                </ul>
              </div>

              <div id="add-auth" className="space-y-4">
                <h3 className="text-xl font-medium scroll-mt-16 dark:text-gray-200">Add authentication credentials to VoIP Prov</h3>
                <p className="text-gray-700 dark:text-gray-300">Add user authentication information with script.</p>
                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
                  ruby add-user-account.rb -u &lt;mac address&gt; --password --line &lt;line #&gt; --number &lt;phone number&gt;
                </div>
              </div>
            </div>
          </section>

          <section id="configure-ata" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Configure Linksys ATA</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Login to ATA at http://&lt;ip address&gt;/admin/. Enter 'admin' and username with no password.</li>
              <li>Click 'switch to advanced view'. Click 'Provisioning'.</li>
              <li>Set 'Provision Enable' to 'Yes'</li>
              <li>Replace Profile Rule from /init.cfg to http://prov.beamspeed.net/linksys/$PN/$MAU.xml</li>
              <li>Set Report Rule to http://prov.beamspeed.net/linksys/report/$MAU</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300">
              Manually issue a configuration resynchronization to make the ATA retrieve its configuration from the provisioning server.
            </p>
            
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              http://&lt;ip address&gt;/admin/resync
            </div>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 whitespace-normal dark:text-white">Last Modified</h2>
            <p className="text-gray-600 whitespace-normal dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
