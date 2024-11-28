"use client"

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function CocopahPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
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
    <div className="p-6 w-full">
      <div className="w-full overflow-hidden">
        <Breadcrumb className="mb-6 w-full overflow-hidden">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem className="break-all">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbLink href="/customers">Customers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbPage>Cocopah Indian Tribe</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all">Cocopah Indian Tribe</h1>

          <div className="space-y-4 w-full overflow-hidden">
            <h2 className="text-2xl font-semibold break-all">Table of Contents</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li className="break-all">
                <a href="#mikrotik-config" className="hover:text-blue-600 break-all">
                  MikroTik AP Configuration
                </a>
              </li>
              <li className="break-all">
                <a href="#last-modified" className="hover:text-blue-600 break-all">
                  Last Modified
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 w-full overflow-hidden">
            <h2 id="mikrotik-config" className="text-2xl font-semibold scroll-mt-16 break-all">
              MikroTik AP Configuration
            </h2>
            
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`/interface bridge
add l2mtu=2290 name=bridge1 priority=0x1000 protocol-mode=rstp
add name=loopback0
add l2mtu=1500 name=public-ips

/interface vpls
add disabled=no l2mtu=1500 mac-address=02:65:90:1C:68:B8 name=vpls1 \\
    remote-peer=192.168.254.2 vpls-id=1648:1

/interface vlan
add comment="External to Water Users" interface=ether1 l2mtu=1522 name=vlan73 \\
    vlan-id=73
add comment="Cocopah PD" interface=ether1 l2mtu=1522 name=vlan74 vlan-id=74
add comment="Cocopah Housing" interface=ether1 l2mtu=1522 name=vlan75 \\
    vlan-id=75
add comment="MPLS to Cocopah RV" interface=ether1 l2mtu=1522 name=vlan76 \\
    vlan-id=76
add comment="MPLS xconnect to RV park" interface=ether1 l2mtu=1522 name=\\
    vlan144 vlan-id=144

/interface wireless security-profiles
set [ find default=yes ] group-ciphers="" supplicant-identity=MikroTik \\
    unicast-ciphers=""
add group-ciphers="" name=radius-auth radius-mac-accounting=yes \\
    radius-mac-mode=as-username-and-password supplicant-identity=MikroTik \\
    unicast-ciphers=""

/interface wireless
set 0 band=5ghz-onlyn bridge-mode=disabled channel-width=20/40mhz-ht-above \\
    country="united states" default-forwarding=no disabled=no frequency=5765 \\
    frequency-mode=regulatory-domain ht-rxchains=0,1 ht-txchains=0,1 l2mtu=\\
    2290 mode=ap-bridge nv2-cell-radius=10 nv2-preshared-key=otCyijLys9 \\
    nv2-security=enabled security-profile=radius-auth ssid=Cocopah wds-mode=\\
    static wireless-protocol=nv2

/interface wireless wds
add comment="Cocopah Judicial" disabled=no l2mtu=2290 master-interface=wlan1 \\
    name=wds1 wds-address=00:0C:42:87:F1:65

/ip pool
add name=pool1 ranges=10.1.50.20-10.1.50.100
add name=rv-park ranges=192.168.13.20-192.168.13.254

/ip dhcp-server
add address-pool=pool1 authoritative=yes disabled=no interface=wlan1 name=\\
    dhcp1
add address-pool=rv-park authoritative=yes disabled=no interface=vlan144 \\
    name=dhcp2 relay=192.168.13.1

/ppp profile
add change-tcp-mss=yes local-address=10.1.50.1 name=cocopah-vpn \\
    remote-address=pool1 use-encryption=yes

/queue tree
add max-limit=8M name=queue1

/queue type
add kind=red name=ethernet-red red-limit=250 red-max-threshold=225

/routing bgp instance
set default as=64513

/routing ospf instance
set [ find default=yes ] distribute-default=if-installed-as-type-1 router-id=\\
    192.168.254.1

/snmp community
set [ find default=yes ] name=prawquel

/interface bridge port
add bridge=bridge1 interface=wds1 path-cost=100
add bridge=public-ips interface=vpls1

/interface pptp-server server
set enabled=yes

/interface wireless access-list
add comment="Purchasing Building" interface=wlan1 mac-address=\\
    00:0C:42:88:29:97
add comment="Judicial building" interface=wlan1 mac-address=00:0C:42:87:F1:65
add interface=wlan1 mac-address=00:0C:42:88:27:1D
add interface=wlan1 mac-address=00:0C:42:88:29:99
add interface=wlan1 mac-address=00:0C:42:87:F1:5D
add interface=wlan1 mac-address=00:0C:42:87:F0:C9
add interface=wlan1 mac-address=00:0C:42:88:29:8B
add interface=wlan1 mac-address=00:0C:42:98:5E:C5
add interface=wlan1 mac-address=00:0C:42:98:5E:E3
add interface=wlan1 mac-address=00:0C:42:87:F1:57

/ip address
add address=192.168.254.1/27 interface=wlan1
add address=192.168.254.33/30 interface=bridge1
add address=65.49.171.29/30 interface=vlan74
add address=65.49.171.1/28 interface=public-ips
add address=65.49.171.25/30 interface=vlan75
add address=65.49.171.98/30 interface=vlan73
add address=192.168.15.2/30 interface=vlan76
add address=192.168.15.6/30 interface=vlan144

/ip dhcp-server network
add address=10.1.50.0/24 dns-server=4.2.2.2,8.8.8.8 gateway=10.1.50.1
add address=192.168.13.0/24 gateway=192.168.13.1

/ip dns
set max-udp-packet-size=512 servers=208.47.103.26,208.47.103.20

/ip firewall address-list
add address=192.168.1.0/24 list=cocopah-nets
add address=192.168.2.0/24 list=cocopah-nets
add address=192.168.3.0/24 list=cocopah-nets
add address=192.168.4.0/24 list=cocopah-nets
add address=192.168.5.0/24 list=cocopah-nets
add address=192.168.6.0/24 list=cocopah-nets
add address=192.168.7.0/24 list=cocopah-nets
add address=192.168.8.0/24 list=cocopah-nets
add address=192.168.9.0/24 list=cocopah-nets
add address=192.168.10.0/24 list=cocopah-nets
add address=192.168.11.0/24 list=cocopah-nets

/ip firewall filter
add chain=forward connection-state=established
add chain=forward connection-state=related
add action=drop chain=forward connection-state=invalid
add chain=input comment="Allow Beamspeed SSH" dst-port=22,23 in-interface=\\
    vlan73 protocol=tcp src-address=65.49.171.226
add action=drop chain=input comment="drop ssh brute forcers" dst-port=22 \\
    in-interface=vlan73 protocol=tcp src-address-list=ssh_blacklist
add action=add-src-to-address-list address-list=ssh_blacklist \\
    address-list-timeout=1w3d chain=input connection-state=new dst-port=22 \\
    in-interface=vlan73 protocol=tcp src-address-list=ssh_stage3
add action=add-src-to-address-list address-list=ssh_stage3 \\
    address-list-timeout=1m chain=input connection-state=new dst-port=22 \\
    in-interface=vlan73 protocol=tcp src-address-list=ssh_stage2
add action=add-src-to-address-list address-list=ssh_stage2 \\
    address-list-timeout=1m chain=input connection-state=new dst-port=22 \\
    in-interface=vlan73 protocol=tcp src-address-list=ssh_stage1
add action=add-src-to-address-list address-list=ssh_stage1 \\
    address-list-timeout=1m chain=input connection-state=new dst-port=22 \\
    in-interface=vlan73 protocol=tcp
add action=reject chain=forward comment="Block access to Judicial Court" \\
    dst-address=192.168.7.0/24 in-interface=wlan1
add action=reject chain=forward dst-address-list=cocopah-nets in-interface=\\
    bridge1
add chain=forward comment="Allow all to public IPs" dst-address=\\
    65.49.171.0/27 out-interface=public-ips
add action=log chain=forward dst-address=65.49.171.0/27

/ip firewall nat
add action=masquerade chain=srcnat out-interface=vlan73 src-address=\\
    192.168.0.0/16

/ip route
add check-gateway=ping distance=50 gateway=65.49.171.97
add check-gateway=arp distance=60 gateway=65.49.171.253
add distance=250 dst-address=65.49.171.0/27 type=blackhole
add distance=1 dst-address=192.168.7.0/24 gateway=192.168.254.34

/ip service
set telnet disabled=yes
set api disabled=no

/mpls interface
set [ find default=yes ] mpls-mtu=1512

/mpls ldp
set enabled=yes lsr-id=192.168.254.1 transport-address=192.168.254.1

/mpls ldp interface
add interface=wlan1 transport-address=192.168.254.1

/queue interface
set ether1 queue=ethernet-default
set ether2 queue=ethernet-default
set ether3 queue=ethernet-default

/radius
add address=65.49.170.167 secret=RafArjOdeph3FrectEaw service=wireless

/routing bgp network
add network=192.168.0.0/20 synchronize=no
add network=192.168.254.0/24 synchronize=no

/routing bgp peer
add name=peer1 remote-address=192.168.15.5 remote-as=14237

/routing ospf interface
add interface=wlan1 network-type=ptmp

/routing ospf network
add area=backbone network=192.168.254.0/27

/snmp
set trap-target=0.0.0.0

/system clock
set time-zone-name=America/Phoenix

/system identity
set name=cocopah-ap

/system logging
add topics=ospf,!debug

/system ntp client
set enabled=yes primary-ntp=169.229.70.64 secondary-ntp=68.48.160.205

/system ntp server
set broadcast=yes enabled=yes manycast=no

/tool bandwidth-server
set authenticate=no

/tool graphing interface
add
add interface=vlan73
add interface=wlan1`}
              </pre>
            </div>

            <div id="last-modified" className="mt-8 p-4 border rounded-lg w-full overflow-hidden">
              <h2 className="text-xl font-semibold mb-2 break-all">Last Modified</h2>
              <p className="text-gray-600 break-all">
                Last configuration update: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{ zIndex: 50 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
}
