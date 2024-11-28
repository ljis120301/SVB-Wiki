"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function ExpediencePage() {
  return (
    <div className="p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Expedience Programming</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold dark:text-white">Programming</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">This document explains how to configure a new or replacement Expedience BTS for Beamspeed's network.</p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Table of Contents</h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <a href="#new-bts" className="hover:text-blue-600 dark:hover:text-blue-400">
                Programming new BTS
              </a>
              <ul className="list-disc pl-8 mt-2">
                <li>
                  <a href="#restore-defaults" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Restore to Default Settings
                  </a>
                </li>
                <li>
                  <a href="#pre-install" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Pre-installation configuration
                  </a>
                  <ul className="list-disc pl-8 mt-2">
                    <li>
                      <a href="#base-template" className="hover:text-blue-600 dark:hover:text-blue-400">
                        Base template default values
                      </a>
                    </li>
                    <li>
                      <a href="#non-default" className="hover:text-blue-600 dark:hover:text-blue-400">
                        Non-default values
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#upgrading" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Upgrading to new version
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#post-install" className="hover:text-blue-600 dark:hover:text-blue-400">
                Post Installation configuration
              </a>
            </li>
            <li>
              <a href="#replacement" className="hover:text-blue-600 dark:hover:text-blue-400">
                Replacement procedure
              </a>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          This document explains how to configure a new or replacement Expedience BTS for Beamspeed's network.
        </p>

        <section id="new-bts" className="space-y-6">
          <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Programming new BTS</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium dark:text-gray-200">Login</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The base can be configured over its serial connection cable with following port values:
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-800 dark:text-gray-200">
                Bits per secound - 19200
                Data bits - 8
                Parity - none
                Stop bits - 1
                Flow control - none
              </pre>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Once the base has booted up you'll need to reset the base to its default settings. If the BTS has a password it'll show a screen such as:
            </p>

            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre">
              Welcome to NextNet Version 4.6.7 Expedience AMOD Base Station
              Location: wellton1, Device Name: welltonbts1

              User Access Verification

              Password:
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Enter FactoryDefaults as the password in order to clear the configuration.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Write the cleared config, and reboot:
            </p>

            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              write -f
              reboot -f
            </div>
          </div>
        </section>

        <section id="restore-defaults" className="space-y-6">
          <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Restore to Default Settings</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Log in with the following password or if the base logs you in as superuser&gt; log out and log in with the following password.
          </p>

          <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
            FactoryDefaults
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            After entering the password the base will be at factory default settins and will prompt for a password. Hit enter to log in and write the changes to the base and restart.
          </p>

          <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
            write -f
            reboot -f
          </div>
        </section>

        <section id="pre-install" className="space-y-6">
          <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Pre-installation configuration</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            The base template below is has the defaults being used on deployed base stations.
          </p>

          <section id="base-template" className="space-y-4">
            <h3 className="text-xl font-medium dark:text-gray-200">Base template default values</h3>
            
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono whitespace-pre overflow-x-auto text-sm leading-relaxed">
{`set airlink privatemode enabled
set airlink downlink bias 2
set airlink state enabled

set device ethernet limit 10f

set radio timing external
set aaa authority remote
set aaa server address 10.1.4.8

set vlan ethernet pvid 0
set vlan untagged id 0

set system contact noc@beamspeed.net

set local allow disabled
set local sla 1000-1000
set local voip state disabled

set relay dhcp agent circuit id enabled
set relay dhcp agent remote id enabled

set snmp get community a4t7qrbm
set snmp set community dr5n62zt
set snmp trap server 10.1.9.138
set snmp traps enabled

set device password nja54JjY
set device su password pCJ1eg5Qy

set syslog aaa level 4
set syslog airlink level 4
set syslog config level 5
set syslog nnmgr level 5
set syslog relay level 4
set syslog stack level 5`}</div>
          </section>

          <section id="non-default" className="space-y-4">
            <h3 className="text-xl font-medium dark:text-gray-200">Non-default values</h3>
            
            <p className="text-gray-700 dark:text-gray-300">
              Settings below are the required non-defaults values for a new base station. Please contact NOC to obtain the correct values as it may vary depending on the area.
            </p>

            <div className="bg-black text-green-400 p-6 rounded-lg font-mono whitespace-pre overflow-x-auto text-sm leading-relaxed">
{`set net ip address <ip address>
set net ip default gateway <gateway>
set net ip net mask <netmask>
set net vlan mgmt id <id>
set system location <location>
set system name <name>
set system cell <cell>
set radio frequency <frequency>-<channel width>:<channel #>
set airlink extended range <0-3>`}</div>
          </section>
        </section>

        <section id="upgrading" className="space-y-6">
          <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Upgrading to new version</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium dark:text-gray-200">Verify if base is on Current version 4.6.7</h3>
            <p className="text-gray-700 dark:text-gray-300">
              After a base has booted up check if it has the current version. The prompt will show current version or run the following command for more details:
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              show version
            </div>

            <h3 className="text-xl font-medium dark:text-gray-200">Configure base to be on the network</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Most base stations will need to be upgraded before being deployed. The template below can be used to put the base on VLAN4 to upgrade the base from our Expedience server.
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre">
{`set net ip address 10.1.4.9
set net ip default gateway 10.1.4.1
set net ip net mask 255.255.254.0
set net vlan mgmt id 4`}</div>

            <h3 className="text-xl font-medium dark:text-gray-200">Log on to Expedience server to begin the upgrade</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This step requires the linux username and password on the Expedience server over SSH and IP access to the base being prepared. Please contact NOC to setup login credentials.
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre">
{`ssh user@exped.beamspeed.net
cd /opt/NetProvision/baseupgrade/
sudo ./baseupgrade.bin -l 4.6.7 10.1.4.9:pCJ1eg5Qy`}</div>
          </div>
        </section>

        <section id="post-install" className="space-y-6">
          <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Post Installation configuration</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            The airlink parameter does not allow CPEs to access the newly deployed base station. Once the base station is fully operational check that the GPS has a lock and disable private mode.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-medium dark:text-gray-200">Verify GPS Lock</h3>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              devstats -ag
            </div>

            <h3 className="text-xl font-medium dark:text-gray-200">Disable privatemode</h3>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre">
{`set airlink privatemode disable
write -f`}</div>
          </div>
        </section>

        <section id="replacement" className="space-y-6">
          <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Replacement procedure</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            In some cases a base will have problems such as underpower.
          </p>

          <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre">
{`devstats -ax
State of Radio ........ Underpower`}</div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium dark:text-gray-200">Copy saved configuration from the old base</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The following command shows the non-default options, which have been changed from their default values. A replacement can easily be programmed if the base is accessible over telnet.
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              show -d
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Modify show -d output You can then copy the output to clipboard, and modify it to match the correct syntax for programming a base.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              The output will look like this:
            </p>

            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              airlink state {'=>'} enabled
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              And you need to prefix each line with 'set' and remove the {'=>'} symbol.
            </p>

            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              set airlink state enabled
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Enable private mode until BTS is fully deployed in field.
            </p>

            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              set airlink privatemode enabled
            </div>
          </div>
        </section>

        <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Last Modified</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Last configuration update: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}
