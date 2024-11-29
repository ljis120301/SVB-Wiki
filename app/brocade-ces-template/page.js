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

export default function BrocadeCESTemplatePage() {
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
              <BreadcrumbPage>Brocade CES Template</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold break-words dark:text-white">Brocade CES Template</h1>

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
            The following is a baseline configuration for Brocade CES 2000 switches operating within the Beamspeed network. It is comprised of two sections. The common, and device specific configuration sections. It is RECOMMENDED that production CES' utilize the common configuration in order to maintain operational consistency within the network.
          </p>

          <p className="text-gray-700 dark:text-gray-300 break-words">
            Switches SHALL also be provisioned with a device specific configuration which exists to uniquely identify, and manage the switch within the service provider network.
          </p>

          <section id="common-configuration" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Common Configuration</h2>
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`! Do not place ports in untagged VLAN by default (if tagged)
no dual-mode-default-vlan

! Change default frame size
default-max-frame-size 9216

! Log only to logging buffer 'show logging'
no logging console
logging buffered 1000

! Log CLI commands entered from every session
logging cli-command

! Disable unused IP features
no ip source-route

! Enable Cisco & Foundry Discovery Protocol
cdp run
fdp run

! Track CPU usage
cpu-usage on

! Enable counters on Access Control Lists
enable-acl-counter

! Set DNS parameters
ip dns domain-name beamspeed.net
ip dns server-address 208.47.103.26 208.47.103.20

!!!! Acces Control Lists (ACLs) !!!!
access-list 1 remark Utility ACL to block everything
access-list 1 deny any

access-list 10 remark NTP peers/servers we sync to/with
access-list 10 permit 65.49.170.145
access-list 10 deny any

access-list 50 remark Subnets allowed management access (SSH & SNMP)
access-list 50 permit 65.49.170.32 0.0.0.31
access-list 50 permit 65.49.170.128 0.0.0.127
access-list 50 permit 65.49.191.0 0.0.0.255
access-list 50 permit 208.47.103.0 0.0.0.63
access-list 50 permit 65.49.171.224 0.0.0.3
access-list 50 permit 208.47.103.104 0.0.0.3
access-list 50 deny any

ip access-list extended our-nets
remark Permit DHCP from customers
permit udp any eq bootpc any
remark Permit our IP subnets
permit ip 65.49.160.0 0.0.31.255 any
permit ip 65.49.216.0 0.0.7.255 any
permit ip 68.64.234.0 0.0.0.255 any
permit ip 208.47.96.0 0.0.7.255 any
deny   ip any any

! Send & receive MPLS LDP labels only for the following
! prefixes
ip prefix-list mpls-ldp-label-acl description "Prefixes of MPLS-enabled infrastructure routers"
ip prefix-list mpls-ldp-label-acl seq 15 permit 65.49.171.64/28 ge 32
ip prefix-list mpls-ldp-label-acl seq 20 permit 208.47.103.64/28 ge 32
ip prefix-list mpls-ldp-label-acl seq 25 permit 65.49.191.0/25 ge 32

! Apply management ACL to system services
ssh access-group 50
snmp-server access-group 50

! Apply MPLS LDP ACL
router mpls
    ldp
        filter-fec mpls-ldp-label-acl in
        filter-fec mpls-ldp-label-acl out

! Disable Telnet
no enable telnet authentication
no telnet server

! Enable encrypted passwords
service password-encryption

! Policy maps
policy-map 2Mbps
   cir 2000000 cbs 62496

! Create AAA authentication profile
aaa authentication login default local radius
aaa authentication enable default local radius
aaa authentication enable implicit-user
aaa authorization exec default radius none
enable aaa console

! Allow read-only profile to execute additional commands
privilege exec level 5 skip-page-display

! Set timezone
clock timezone us arizona

!!! Spanning Tree Protocol !!!
! Disable 802.1d STP globally
no spanning-tree

! SSH settings
ip ssh timeout 120
ip ssh idle-time 5
ip ssh authentication-retries 3
ip ssh encryption aes-only

! SMNP Settings
snmp-server location Yuma, AZ
snmp-server contact NOC@BEAMSPEED.NET / 928-343-0300
snmp-server trap-source loopback 1
snmp-server view MIB-2 mib-2 included
snmp-server view MIB-2 enterprises included
snmp-server group READONLY v3 priv read MIB-2
snmp-server preserve-statistics

! NTP settings
ntp
    server 65.49.170.145 version 4

! Blackhole route
ip route 192.0.2.1 255.255.255.255 Null0`}</pre>
            </div>
          </section>

          <section id="required-info" className="space-y-4">
            <h2 className="text-xl font-semibold scroll-mt-16 dark:text-white">Required Information</h2>
            <p className="text-gray-700 dark:text-gray-300">Please obtain the following information before proceeding:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>Hostname</li>
              <li>Management VLAN / Loopback IP</li>
              <li>IP address</li>
              <li>Gateway</li>
              <li>RADIUS server address(es)</li>
              <li>RADIUS password</li>
              <li>Admin user password</li>
            </ul>
          </section>

          <section id="unique-configuration" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Unique Configuration</h2>
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`hostname <hostname>

! OSPF settings
router ospf
    default-passive-interface
    auto-cost reference-bandwidth 100000
    ldp-sync
    log bad_packet
    area <area>

! Set loopback
interace loopback 1
    ip address <IP>
    ip ospf area <area ID>

! Generate SSH key.
crypto key generate

! Enable SSH
ip ssh password-authentication yes

!! Configure Switch IP (Conditional on network topology)
! If Layer 2
vlan <VLAN ID> name Management
    rstp
    router-interface ve <number>

! Enable layer 3 port
interface eth X/X
    enable

! Proceed with common IP interface settings
interface <type> <number>
    port-name <name>
    ip address <ip address>
    ip ospf area <area ID>
    ip ospf active
    ip ospf auth-change-wait-time 0
    ip ospf md5-authentication key-id 1 key <password>
    ip mtu 1500
    no ip redirect

! Enable MPLS on upstream interface
router mpls
    mpls-interface <type> <number>
    ldp-enable

radius-server host <IP 1>
radius-server host <IP 2>
radius-server key <password>

! SMNP Settings
snmp-server community a4t7qrbm ro 50
snmp-server community dr5n62zt rw 50

! Start SNMP server
snmp-server

! Provision admin user account
enable super-user-password <admin pw>
username admin privilege 0 password <admin pw>

! Set source interface to Loopback 1
snmp-server trap-source loopback 1
ip radius source-interface loopback 1
ip ssh source-interface loopback 1
ip syslog source-interface loopback 1
ip telnet source-interface loopback 1
ip tftp source-interface loopback 1
ntp
    source-interface loopback 1`}</pre>
            </div>
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
