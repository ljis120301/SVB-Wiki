"use client"

import { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BGPPage() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="p-2 sm:p-6 w-full relative">
      <div className="w-full overflow-x-auto">
        <Breadcrumb className="mb-6 w-full min-w-full">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="whitespace-nowrap">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="whitespace-nowrap">BGP</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold break-words dark:text-white">BGP</h1>

          <nav className="space-y-2 overflow-x-auto">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 break-words">
              <li><a href="#beamspeed-as-info" className="hover:text-blue-600 dark:hover:text-blue-400">Beamspeed AS Info</a></li>
              <li>
                <a href="#ibgp" className="hover:text-blue-600 dark:hover:text-blue-400">iBGP</a>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="#rtbh" className="hover:text-blue-600 dark:hover:text-blue-400">Remotely Triggered Blackhole</a></li>
                  <li><a href="#confederations" className="hover:text-blue-600 dark:hover:text-blue-400">Confederations</a></li>
                  <li><a href="#route-reflectors" className="hover:text-blue-600 dark:hover:text-blue-400">Route Reflectors</a></li>
                </ul>
              </li>
              <li>
                <a href="#ebgp" className="hover:text-blue-600 dark:hover:text-blue-400">eBGP</a>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="#first-class-hosting" className="hover:text-blue-600 dark:hover:text-blue-400">First Class Hosting (AS393545)</a></li>
                  <li><a href="#teliasonera" className="hover:text-blue-600 dark:hover:text-blue-400">TeliaSonera (AS1299)</a></li>
                  <li><a href="#transtelco" className="hover:text-blue-600 dark:hover:text-blue-400">Transtelco, Inc (AS32098)</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          <p className="text-gray-700 dark:text-gray-300">
            Beamspeed utilizes BGP routing to carry Internet and customer prefixes within our Autonomous System.
          </p>

          <section id="beamspeed-as-info" className="space-y-4 overflow-x-auto">
            <h2 className="text-xl sm:text-2xl font-semibold break-words scroll-mt-16 dark:text-white">Beamspeed AS Info</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium whitespace-normal break-words">AS Number</TableCell>
                    <TableCell className="whitespace-normal break-words">14237</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-normal break-words">ASN Registrar</TableCell>
                    <TableCell className="whitespace-normal break-words">ARIN</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-normal break-words">ORG ID</TableCell>
                    <TableCell className="whitespace-normal break-words">BEAMS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-normal break-words">Registrar ASHandle</TableCell>
                    <TableCell className="whitespace-normal break-words">AS14237</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section id="ibgp" className="space-y-4 overflow-x-auto">
            <h2 className="text-xl sm:text-2xl font-semibold break-words scroll-mt-16 dark:text-white">iBGP</h2>
            <p className="text-gray-700 dark:text-gray-300 break-words">
              Beamspeed utilizes internal BGP (iBGP) to carry Internet and customer IP prefixes across our autonomous system. Our AS utilizes a mixture BGP Confederations and Route Reflectors to facilitate scalable route distribution.
            </p>
            <p className="text-gray-700 dark:text-gray-300 break-words">
              It should be noted that BGP is not an IGP, and therefore is not responsible for ensuring next-hop router reachability. OSPF is our IGP, and is solely responsible for infrastructure & loopback address propagation within the AS.
            </p>
            <p className="text-gray-700 dark:text-gray-300 break-words">
              For more information see Cisco's presentation on <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Deploying OSPF for ISPs</a>.
            </p>
          </section>

          <section id="rtbh" className="space-y-4 overflow-x-auto">
            <h2 className="text-xl sm:text-2xl font-semibold break-words scroll-mt-16 dark:text-white">Remotely Triggered Blackhole</h2>
            <p className="text-gray-700 dark:text-gray-300 break-words">
              Beamspeed's network offers RTBH functionality through the use of a special BGP community, <span className="font-mono">14237:666</span>. Routes received from customers, or internally advertised via a route-map statement have the next-hop of the advertised prefix (IPv4 /32) changed to the special use address <span className="font-mono">192.0.2.1</span>. This address is null routed on all routers throughout the network which results in traffic destinted to the advertised prefix being dropped at all network ingress points.
            </p>
            
            <div>
              <h3 className="text-xl font-medium mb-2 dark:text-white">Example Null route</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words">
                ip route 192.0.2.1 255.255.255.255 null 0 name Blackhole
              </pre>
            </div>

            <p className="text-gray-700 dark:text-gray-300 break-words">
              Internal blackhole advertisements are also be propagated to Beamspeed's upstream carriers through outbound route-maps on the provider's connection which re-tag the route with the appropriate blackhole community for the provider's network.
            </p>
            <p className="text-gray-700 dark:text-gray-300 break-words">
              Contact provider for list of supported BGP communities.
            </p>
          </section>

          <section id="confederations" className="space-y-4 overflow-x-auto">
            <h2 className="text-xl sm:text-2xl font-semibold break-words scroll-mt-16 dark:text-white">Confederations</h2>
            <p className="text-gray-700 dark:text-gray-300 break-words">
              The network is split into multiple, sub-AS's, or Confederations, per market in order to reduce the size, and simplify management, of the iBGP mesh. Peers inside the confderations are not fully meshsed, but rather connect to a BGP Route Reflector. This further reduces administrative overhead while still providing full route redistribution inside the Confederation.
            </p>

            <div>
              <h3 className="text-xl font-medium mb-2 dark:text-white">ASN List</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">Imperial Valley</TableCell>
                      <TableCell className="font-mono break-all">65000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">Yuma</TableCell>
                      <TableCell className="font-mono break-all">65002</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 dark:text-white">BGP Confederation diagram</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words">
                Imperial Valley (65000) ------ Yuma (65002)
              </pre>
            </div>

            <div className="space-y-4 overflow-x-auto">
              <h3 className="text-xl font-medium mb-2 dark:text-white">Confederation configuration example</h3>
              
              <div>
                <h4 className="text-lg font-medium mb-2 dark:text-white">Cisco</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words">
{`router bgp 65000
    no bgp default ipv4-unicast
    bgp confederation identifer 14237
    bgp confederation peers 65002

    neighbor 192.0.2.1 remote-as 65002
    neighbor 192.0.2.1 description Confederation peer
    neighbor 192.0.2.1 version 4
    neighbor 192.0.2.1 ebgp-multihop <N>
    neighbor 192.0.2.1 update-source Loopback0

    address-family ipv4
    neighbor 192.0.2.1 activate
    neighbor 192.0.2.1 send-community both`}</pre>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 dark:text-white">MikroTik</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words">
{`/routing bgp instance
set default as=65000 router-id=<loopback IP> confederation=14237 confederation-peers=65001

/routing bgp peer
add instance=default name=peer1 remote-as=65001 remote-address=192.0.2.1 nexthop-choice=propagate address-families=ip update-source=loopback0 multihop=yes comment="Confederation peer"`}</pre>
              </div>
            </div>
          </section>

          <section id="route-reflectors" className="space-y-4 overflow-x-auto">
            <h2 className="text-xl sm:text-2xl font-semibold break-words scroll-mt-16 dark:text-white">Route Reflectors</h2>
            
            <div className="space-y-4 overflow-x-auto">
              <h3 className="text-xl font-medium mb-2 dark:text-white">Route Reflector configuration</h3>
              
              <div>
                <h4 className="text-lg font-medium mb-2 dark:text-white">Cisco</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words">
{`router bgp 65000
    no bgp default ipv4-unicast

    neighbor 192.0.2.1 remote-as 65000
    neighbor 192.0.2.1 description RR client #1
    neighbor 192.0.2.1 version 4
    neighbor 192.0.2.1 update-source Loopback0
    neighbor 192.0.2.1 route-reflector-client

    address-family ipv4
    neighbor 192.0.2.1 activate
    neighbor 192.0.2.1 send-community both`}</pre>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 dark:text-white">MikroTik</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words">
{`/routing bgp instance
set default as=65000 router-id=<loopback IP> client-to-client-reflection=yes

/routing bgp peer
add instance=default name=peer1 remote-as=65000 remote-address=192.0.2.1 nexthop-choice=default address-families=ip update-source=loopback0 route-reflect=yes`}</pre>
              </div>
            </div>
          </section>

          <section id="ebgp" className="space-y-8 overflow-x-auto">
            <h2 className="text-xl sm:text-2xl font-semibold break-words scroll-mt-16 dark:text-white">eBGP</h2>

            <section id="first-class-hosting" className="space-y-4 overflow-x-auto">
              <h3 className="text-xl font-semibold dark:text-white">First Class Hosting (AS393545)</h3>
              <p className="text-gray-700 dark:text-gray-300 break-words">
                This circuit is connected to Beamspeed's in the PhoenixNAP data center at 3402 E. University Dr, Phoenix, AZ where it terminates on our Brocade XMR 4000 router (<a href="http://edge1.phx1.beamspeed.net" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">edge1.phx1.beamspeed.net</a>)
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg overflow-x-auto">
                <h4 className="text-lg font-semibold mb-4 break-words dark:text-white">Circuit Information</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Customer Name</TableCell>
                        <TableCell className="whitespace-normal break-words">Beamspeed LLC</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Bandwidth</TableCell>
                        <TableCell className="whitespace-normal break-words">200Mbps</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Delivery Interface</TableCell>
                        <TableCell className="whitespace-normal break-words">Single-mode Fiber Optic</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Remote AS</TableCell>
                        <TableCell className="font-mono break-all">393545</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">IP</TableCell>
                        <TableCell className="font-mono break-all">104.251.127.38/30</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Neighbor</TableCell>
                        <TableCell className="font-mono break-all">104.251.127.37/30</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </section>

            <section id="teliasonera" className="space-y-4 overflow-x-auto">
              <h3 className="text-xl font-semibold dark:text-white">TeliaSonera (AS1299)</h3>
              <p className="text-gray-700 dark:text-gray-300 break-words">
                This circuit is connected to Beamspeed's in the PhoenixNAP data center at 3402 E. University Dr, Phoenix, AZ where it terminates in our Brocade XMR 4000 router.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg overflow-x-auto">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">Customer Name</TableCell>
                      <TableCell className="whitespace-normal break-words">Beamspeed LLC</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">TeliaSonera Circuit ID</TableCell>
                      <TableCell className="whitespace-normal break-words">IC-306574</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">Bandwidth</TableCell>
                      <TableCell className="whitespace-normal break-words">500Mbps</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">Delivery Interface</TableCell>
                      <TableCell className="whitespace-normal break-words">Single-mode Fiber Optic</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">Remote AS</TableCell>
                      <TableCell className="font-mono break-all">1299</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">IPv4 Customer</TableCell>
                      <TableCell className="font-mono break-all">213.248.90.134/30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">IPv4 Neighbor</TableCell>
                      <TableCell className="font-mono break-all">213.248.90.133/30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">IPv6 TeliaSonera</TableCell>
                      <TableCell className="font-mono break-all">2001:2000:3080:05F6::1/64</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium whitespace-normal break-words">IPv6 Customer</TableCell>
                      <TableCell className="font-mono break-all">2001:2000:3080:05F6::2/64</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            <section id="transtelco" className="space-y-4 overflow-x-auto">
              <h3 className="text-xl font-semibold dark:text-white">Transtelco, Inc (AS32098)</h3>
              <p className="text-gray-700 dark:text-gray-300 break-words">
                This circuit is delivered directly from Trantelco's fiber network to Ross Road where it connects to a Brocade XMR 8000.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg overflow-x-auto">
                <h4 className="text-lg font-semibold mb-4 break-words dark:text-white">Circuit ID Information</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Customer Name</TableCell>
                        <TableCell className="whitespace-normal break-words">Beamspeed LLC</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Customer ID</TableCell>
                        <TableCell className="whitespace-normal break-words">1-37D6C</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Service ID</TableCell>
                        <TableCell className="whitespace-normal break-words">1-13788394</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Bandwidth</TableCell>
                        <TableCell className="whitespace-normal break-words">1Gbps</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Delivery Interface</TableCell>
                        <TableCell className="whitespace-normal break-words">Single-mode Fiber Optic</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">Remote AS</TableCell>
                        <TableCell className="font-mono break-all">32098</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">IPv4 Customer</TableCell>
                        <TableCell className="font-mono break-all">68.64.237.246/30</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">IPv4 Neighbor</TableCell>
                        <TableCell className="font-mono break-all">68.64.237.245/30</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">IPv6 Customer</TableCell>
                        <TableCell className="font-mono break-all">2604:D600:1100:10::B/64</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal break-words">IPv6 Neighbor</TableCell>
                        <TableCell className="font-mono break-all">2604:D600:1100:10::A/64</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </section>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg overflow-x-auto">
            <h2 className="text-xl font-semibold mb-2 break-words dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-words dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - adjust position for mobile */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 z-50 dark:bg-blue-700 dark:hover:bg-blue-800"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  )
}
