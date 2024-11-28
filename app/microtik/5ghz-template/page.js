"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function fiveghzTemplate() {
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
              <BreadcrumbPage>5GHz AP Template</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">5GHz AP Template</h1>

          <div className="space-y-4 w-full overflow-hidden">
            <h2 className="text-2xl font-semibold break-all dark:text-white">Table of Contents</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="break-all">
                <a href="#radius-config" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  RADIUS Configuration
                </a>
              </li>
              <li className="break-all">
                <a href="#user-config" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  User Configuration
                </a>
              </li>
              <li className="break-all">
                <a href="#system-config" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  System Configuration
                </a>
              </li>
              <li className="break-all">
                <a href="#wireless-config" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  Wireless Configuration
                </a>
              </li>
            </ul>
          </div>

          <section id="radius-config" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">RADIUS Configuration</h2>
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`/radius
add service=wireless,login address=65.49.170.167 secret=f3m9zx7c timeout=500ms
add service=wireless,login address=65.49.170.152 secret=f3m9zx7c timeout=500ms

/radius incoming set accept=yes`}
              </pre>
            </div>
          </section>

          <section id="user-config" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">User Configuration</h2>
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`/user group
add name=api-prov policy=read,write,api
add name=deny-login

/user aaa
set use-radius=yes accounting=yes interim-update=5m default-group=deny-login

/user
set admin comment="" password=h02zAqzeq
add name=platprov password=kraspacyeOdIvCegBax0 group=api-prov`}
              </pre>
            </div>
          </section>

          <section id="system-config" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">System Configuration</h2>
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`/tool mac-server
remove [find]
add interface=all

/system clock set time-zone-name="America/Phoenix"
/system ntp client set enabled=yes mode=unicast primary-ntp=65.49.170.145

/ip service
disable telnet,ftp,www,www-ssl
enable ssh,api,winbox`}
              </pre>
            </div>
          </section>

          <section id="wireless-config" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Wireless Configuration</h2>
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
{`/interface bridge
add name=bridge-provision comment="Please provision"

/interface wireless security-profiles
add name=radius-auth copy-from=0 radius-mac-authentication=yes radius-mac-accounting=yes radius-mac-mode=as-username-and-password interim-update=5m

/interface wireless
set 0 mode=ap-bridge ssid=beamspeed band=5ghz-onlyn frequency=5765 wireless-protocol=nv2 wds-mode=dynamic wds-default-bridge=bridge-provision bridge-mode=disabled default-authentication=no default-forwarding=no security-profile=radius-auth rate-selection=advanced frequency-mode=manual-txpower country="united states" hide-ssid=yes ht-rxchains=0,1 ht-txchains=0,1 nv2-security=enabled nv2-preshared-key=nabVatGhid`}
              </pre>
            </div>
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