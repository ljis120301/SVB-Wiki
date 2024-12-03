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


export default function PuppetPage() {
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
    <div className="p-2 sm:p-6 w-full max-w-[2000px] mx-auto relative">
      <div className="w-full">
        <Breadcrumb className="mb-6 w-full">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Puppet</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full max-w-none">
          <h1 className="text-2xl sm:text-3xl font-bold break-words dark:text-white">Puppet</h1>

          <p className="text-gray-700 dark:text-gray-300">
            Puppet is a Configuration Management utility used to describe system configurations on Unix & Windows-based systems. Beamspeed utilizes Puppet for server configuration / lifecycle management.
          </p>

          <nav className="space-y-2 overflow-x-auto">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 break-words">
              <li>
                <a href="#client-installation" className="hover:text-blue-600 dark:hover:text-blue-400">Client Installation</a>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    <a href="#freebsd" className="hover:text-blue-600 dark:hover:text-blue-400">FreeBSD</a>
                  </li>
                  <li>
                    <a href="#ubuntu" className="hover:text-blue-600 dark:hover:text-blue-400">Ubuntu</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#running-puppet" className="hover:text-blue-600 dark:hover:text-blue-400">Running Puppet for the first time</a>
              </li>
              <li>
                <a href="#maintenance" className="hover:text-blue-600 dark:hover:text-blue-400">Performing server maintenance tasks</a>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    <a href="#revoking-cert" className="hover:text-blue-600 dark:hover:text-blue-400">Revoking a certificate</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#r10k" className="hover:text-blue-600 dark:hover:text-blue-400">Managing Puppet with r10k</a>
              </li>
            </ul>
          </nav>

          <section id="client-installation" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Client Installation</h2>
            <p className="text-gray-700 dark:text-gray-300">
              A minimal amount of manual bootstrapping is required to provision the Puppet client (or agent) on a server. We'll cover the steps necessary to install Puppet on Beamspeed's supported operating systems.
            </p>
          </section>

          <section id="freebsd" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">FreeBSD</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Puppet installation on FreeBSD 10.x is straightforward. If this is a fresh system, ensure Pkg is installed.
            </p>
            <TerminalCard>sudo pkg</TerminalCard>
              
            <p className="text-gray-700 dark:text-gray-300">
              Then, install Puppet from the FreeBSD package repositories.
            </p>
            <TerminalCard>sudo pkg install puppet</TerminalCard>
          </section>

          <section id="ubuntu" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Ubuntu</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ubuntu provdies up-to-date Puppet packages for standard Ubuntu releases in its official APT repositories. Although, Ubuntu LTS releases do not receive the same frequency of updates due to the inherit nature of an LTS release; the packages provided are more stable, and not cutting edge.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              This has a downside in that bug fixes, or new, necessary features are not present in the LTS repos for some time. Due to this fact, Beamspeed has chosen to utilize Puppet packages distribtued directly from Puppet Labs. These packages are covered by Puppet Lab's support rather than Canonical.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To configure a Ubuntu system to utilize the Puppet Labs APT repo, navigate to the Using the Puppet Labs Package Repositories, and download the appropriate puppetlabs-release package for your OS release.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For example, to enable the Puppet Labs repo for Ubuntu 14.04 you would first download the package necessary for configuring the APT repo.
            </p>
            <TerminalCard>wget https://apt.puppetlabs.com/puppetlabs-release-trusty.deb</TerminalCard>
            
            <p className="text-gray-700 dark:text-gray-300">
              Once the package is downloaded, install it with dpkg.
            </p>
            <TerminalCard>sudo dpkg -i puppetlabs-release-trusty.deb</TerminalCard>
            
            <p className="text-gray-700 dark:text-gray-300">
              This installs the Puppet Labs apt source file in /etc/apt/sources.list.d.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Then update your APT repo list by running:
            </p>
            <TerminalCard>sudo apt-get update</TerminalCard>
            
            <p className="text-gray-700 dark:text-gray-300">
              This will scan the newly added Puppet Labs repo for available packages, and prefer them over the Ubuntu packages since they are a more recent release.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Finally, Install Puppet
            </p>
            <TerminalCard>sudo apt-get install puppet</TerminalCard>
          </section>

          <section id="running-puppet" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Running Puppet for the first time</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Once Puppet is installed, it needs to be configured to communicate with the Puppet Master. To do so, execute
            </p>
            <TerminalCard>sudo puppet agent --test --pluginsync</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              The Puppet agent will first generate a private SSL key which is used to secure communication with the Puppet Master. It will also generate a Certificate Signing Request (CSR) which it send to the Puppet Master so it can be issued a public certificate.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Puppet will then perform a DNS A record lookup for the hostname 'puppet' under the search domain configured in /etc/resolv.conf (normally 'puppet.beamspeed.net'), connect to the Puppet Master using SSL over port 8140, and submit the CSR for signing.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              If you need to specify an alternate server address you can do so with the --server flag.
            </p>
            <TerminalCard>sudo puppet agent --test --pluginsync --server=puppet.beamspeed.net</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              At this point the Puppet is waiting its certificate to be signed. The agent cannot receive provisioning information from the Master until this process is complete.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To sign the certificate login to puppetmaster server and execute the following command:
            </p>
            <TerminalCard>sudo puppet cert sign &lt;client hostname&gt;.beamspeed.net</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              Re-run puppet agent on the client server to retrieve the server's catalog, and complete provisioning control by Puppet.
            </p>
            <TerminalCard>sudo puppet agent --test</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              You will see plenty of output on your screen as Puppet modifies the server's configuration to bring it in line with the configured node profile.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The installation of the Puppet client is complete, and you now have a server that is fully configured for unattended system configuration management.
            </p>
          </section>

          <section id="maintenance" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Performing server maintenance tasks</h2>
          </section>

          <section id="revoking-cert" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Revoking a certificate</h2>
            <p className="text-gray-700 dark:text-gray-300">
              At times it maybe be necessary to revoke a certificate for an agent that you no longer want to manage with the Puppet Master. To do so, sign into the Puppet Master and execute:
            </p>
            <TerminalCard>sudo puppet cert revoke &lt;hostname&gt;.beamspeed.net</TerminalCard>
            <p className="text-gray-700 dark:text-gray-300">
              This prevents further communication from the Agent to the Master as well as prevents the certficate hostname from being utilized by future nodes in the network.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The latter may be undesireable as you may be revoking the cert so that you can replace the node with a different node that happens to utilize the same hostname.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To revoke the cert, and delete the hostname from Puppet so it may be reused execute:
            </p>
            <TerminalCard>sudo puppet cert clean &lt;hostname&gt;.beamspeed.net</TerminalCard>
          </section>

          <section id="r10k" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Managing Puppet with r10k</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Beamspeed utilizes r10k to manage installed Puppet modules, and Puppet environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To learn more about r10k visit the document Getting To Know r10k by Puppet Labs.
            </p>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg overflow-x-auto">
            <h2 className="text-xl font-semibold mb-2 break-words dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-words dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

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
