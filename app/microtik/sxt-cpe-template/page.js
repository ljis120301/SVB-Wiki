"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import TerminalCard from "@/components/ui/terminal-card"
export default function SXTCPETemplatePage() {
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
              <BreadcrumbLink href="/microtik">Microtik</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbPage>SXT CPE Template</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">SXT CPE Template</h1>

          <p className="text-gray-700 dark:text-gray-300">
            This is a configuration template for MikroTik SXT CPE. This template should be applied on all CPE prior to network deployment.
          </p>

          <div className="space-y-4 w-full overflow-hidden">
            <h2 className="text-2xl font-semibold break-all dark:text-white">Table of Contents</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="break-all">
                <a href="#wireless-setup" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Wireless Setup
                </a>
              </li>
              <li className="break-all">
                <a href="#bridge-config" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Bridge Configuration
                </a>
              </li>
              <li className="break-all">
                <a href="#firewall-filters" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Firewall Filters
                </a>
              </li>
              <li className="break-all">
                <a href="#package-management" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Package Management
                </a>
              </li>
            </ul>
          </div>

          <section id="wireless-setup" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Wireless Setup</h2>
            <TerminalCard>
{`:global wirelessMac;
:global wirelessPackage false;

{
  :local wirelessPackages [/system package find name~"wireless"];

  :if ([:len $wirelessPackages] = 0) do={
    :set $wirelessPackage false;
    :error "No wireless packages found. Error"
  } else={
    :global wirelessMac [/interface wireless get 0 mac-address];

    :foreach package in=$wirelessPackages do={
      :if ( [/system package get $package disabled] = false) do={
        :set $wirelessPackage [/system package get $package name];
      }
    }
  }
}`}
            </TerminalCard>
          </section>

          <section id="bridge-config" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Bridge Configuration</h2>
            <TerminalCard>
{`:if ([:len [/interface bridge find]] = 0) do={
  /interface bridge add name=bridge1 auto-mac=no admin-mac=$wirelessMac protocol-mode=none
} else={
  /interface bridge set 0 name=bridge1 auto-mac=no admin-mac=$wirelessMac protocol-mode=none
}

/interface bridge port add bridge=bridge1 interface=ether1`}
            </TerminalCard>
          </section>

          <section id="firewall-filters" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Firewall Filters</h2>
            <TerminalCard>
{`/interface bridge filter
add action=accept chain=customer-filter mac-protocol=arp comment="Allow ARP"
add action=accept chain=customer-filter mac-protocol=ip ip-protocol=udp src-port=68 dst-port=67 comment="Allow DHCP Request"

add action=drop chain=customer-filter mac-protocol=ip packet-type=broadcast comment="Drop other broadcasts"
add action=drop chain=customer-filter mac-protocol=ip packet-type=multicast comment="Drop multicast"

add action=drop chain=customer-filter mac-protocol=ip src-address=10.0.0.0/8 comment="Drop Src RFC1918 1"
add action=drop chain=customer-filter mac-protocol=ip src-address=172.16.0.0/12 comment="Drop Src RFC1918 2"
add action=drop chain=customer-filter mac-protocol=ip src-address=192.168.0.0/16 comment="Drop Src RFC1918 3"`}
            </TerminalCard>
          </section>

          <section id="package-management" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Package Management</h2>
            <TerminalCard>
{`/system package
#### Enable packages which are required in our installation ####
{
  :local enablePackagesString "security,advanced-tools,dhcp,ipv6,routing"
  :local enablePackagesArray [:toarray $enablePackagesString]

  :foreach package in=$enablePackagesArray do={
    :if ([:len [find name=$package]] = 1) do={
      /system package enable $package
    }
  }
}`}
            </TerminalCard>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              Last configuration update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
