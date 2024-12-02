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
import TerminalCard from "@/components/ui/terminal-card"

export default function Catalyst3750TemplatePage() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
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
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Catalyst 3750 Template</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold break-words dark:text-white">Catalyst 3750 Template</h1>

          <nav className="space-y-2 overflow-x-auto">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 break-words">
              <li>
                <a href="#common-configuration" className="hover:text-blue-600 dark:hover:text-blue-400">Common Configuration</a>
              </li>
              <li>
                <a href="#unique-configuration" className="hover:text-blue-600 dark:hover:text-blue-400">Unique Configuration</a>
              </li>
            </ul>
          </nav>

          <p className="text-gray-700 dark:text-gray-300 break-words">
            The following a baseline configuration for Cisco Catalyst 3750 switches operating within the Beamspeed network. It is comprised of two sections. The common, and device specific configuration sections. It is RECOMMENDED that production 3750's utilize the common configuration in order to maintain operational consistency within the network.
          </p>

          <p className="text-gray-700 dark:text-gray-300 break-words">
            Switches SHALL also be provisioned with a device specific configuration which exists to uniquely identify, and manage the switch within the service provider network.
          </p>

          <section id="common-configuration" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Common Configuration</h2>
            <TerminalCard>
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`! Enable IP routing and Cisco Express Forwarding
ip routing
ip cef distributed

! Increase MTU to maximum value
system mtu 1998
system mtu jumbo 9000
system mtu routing 1500

! Always tag the native vlan
vlan dot1q tag native

! Log only to logging buffer 'show logging'
no logging console
no logging monitor
logging buffered 262144 informational

! Disable Unused Services
no service tcp-small-servers
no service udp-small-servers
no ip finger
no service pad
no ip http server
no ip http secure-server
no service config
no boot system

! Do not perform DNS lookups
no ip domain-lookup
ip domain-name beamspeed.net
ip name-server 65.49.170.185
ip name-server 65.49.170.186

!!!! Acces Control Lists (ACLs) !!!!
access-list 1 remark utility ACL to block everything
access-list 1 deny any

access-list 10 remark NTP peers/servers we sync to/with
access-list 10 permit 65.49.170.145
access-list 10 deny any

! Management ACL
access-list 50 remark Subnets allowed management access (SSH & SNMP)
access-list 50 permit 10.0.0.0 0.255.255.255
access-list 50 permit 65.49.170.32 0.0.0.31
access-list 50 permit 65.49.170.128 0.0.0.127
access-list 50 permit 208.47.103.0 0.0.0.63
access-list 50 permit 65.49.171.224 0.0.0.3
access-list 50 permit 208.47.103.104 0.0.0.3
access-list 50 deny   any log

ip access-list extended our-nets
remark Permit DHCP from customers
permit udp any eq bootpc any
remark Permit our IP subnets
permit ip 65.49.160.0 0.0.31.255 any
permit ip 65.49.216.0 0.0.7.255 any
permit ip 68.64.234.0 0.0.0.255 any
permit ip 208.47.96.0 0.0.7.255 any
deny   ip any any log

! Create management VRF
ip vrf management

! Configure logging behavior
service timestamps debug datetime msec localtime show-timezone
service timestamps log datetime msec localtime show-timezone
service password-encryption

! Enable Multi-layer Switching QoS
mls qos

! Policy maps
policy-map 2Mbps
 class class-default
  police 2097000 8192 exceed-action drop

! Enable err-disable recovery
errdisable recovery cause udld
errdisable recovery cause bpduguard
errdisable recovery cause dtp-flap
errdisable recovery cause link-flap
errdisable recovery cause loopback
errdisable recovery interval 90

! Create AAA authentication profile
aaa new-model
aaa group server radius radius-auth
    ip vrf forwarding management
aaa authentication login default local group radius-auth
aaa authorization exec default local group radius-auth

clock timezone MST -7
ip subnet-zero
ip classless
ip tcp selective-ack
ip tcp path-mtu-discovery
no ip source-route

! Use ASN:Community format BGP communities
ip bgp-community new-format

! Spanning Tree Protocol
spanning-tree mode rapid-pvst

! SSH settings
ip ssh time-out 120
ip ssh authentication-retries 3

! Disable VTP
vtp mode off

! Disable VLAN 1
interface Vlan1
no ip address
no ip route-cache
shutdown

! SMNP Settings
snmp-server location Yuma, AZ
snmp-server contact NOC@BEAMSPEED.NET / 928-343-0300
snmp-server view MIB-2 mib-2 included
snmp-server view MIB-2 enterprises included
snmp-server group READONLY v3 priv read MIB-2

! NTP Settings
ntp server vrf management 65.49.170.145

! NTP access control
ntp access-group query-only 1   ! deny all NTP control queries
ntp access-group serve 1        ! deny all NTP time and control queries by default
ntp access-group peer 10        ! permit time sync to configured peer(s)/server(s) only`}</pre>
            </TerminalCard>
          </section>

          <section id="required-info" className="space-y-4">
            <h2 className="text-xl font-semibold scroll-mt-16 dark:text-white">Required Information</h2>
            <p className="text-gray-700 dark:text-gray-300">Please obtain the following information before proceeding:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>Hostname</li>
              <li>Management VLAN</li>
              <li>IP address</li>
              <li>Gateway</li>
              <li>RADIUS server address(es)</li>
              <li>RADIUS password</li>
              <li>Admin user password</li>
            </ul>
          </section>

          <section id="unique-configuration" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Unique Configuration</h2>
            <TerminalCard>
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`hostname <hostname>

! Generate SSH key. Select modulus 2048.
crypto key generate rsa

! Enable SSH version 2
ip ssh version 2

! Enable SCP
ip scp server enable

! Configure Switch IP
interface Vlan <mgmt vlan id>
ip vrf forwarding management
ip address <ip address>
no ip proxy-arp
no ip redirects

! Configure Null interface
interface Null0
    no ip unreachables

aaa group server radius radius-auth
    server-private <radius_server> auth-port 1812 acct-port 1813 key <radius password>
    ip radius source-interface <mgmt vlan interface>

! SMNP Settings
snmp-server user <username> READONLY v3 auth sha <auth pass> priv aes 128 <priv pass> access 50

! VTP domain must be md5 converted string of the hostname string
vtp domain <md5 string>

! OSPF settings
router ospf <ASN>
    passive-interface default
    auto-cost reference-bandwidth 100000
    area <area> authentication message-digest

! Blackhole route
ip route 192.0.2.1 255.255.255.255 Null0 name Blackhole

! Gateway
ip route vrf management 0.0.0.0 0.0.0.0 <gateway>
enable secret <admin pw>
username admin privilege 15 secret <admin pw>

! Set source interface to Loopback 0
logging source-interface loopback 0
ntp source loopback 0
ip telnet source-interface loopback 0
ip tftp source-interface loopback 0
ip ftp source-interface loopback 0
ip radius source-interface loopback 0
ip ssh source-interface loopback 0

! Line Console and VTY
line vty 0 4
    access-class 50 in vrf-also
    transport input ssh
line vty 5 15
    access-class 50 in vrf-also
    transport input ssh`}</pre>
            </TerminalCard>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg overflow-x-auto">
            <h2 className="text-xl font-semibold mb-2 break-words dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-words dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
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
