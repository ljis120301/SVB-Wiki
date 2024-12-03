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
import TerminalCard from '@/components/TerminalCard'
export default function PlatypusPage() {
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
              <BreadcrumbPage>Platypus</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full max-w-none">
          <h1 className="text-2xl sm:text-3xl font-bold break-words dark:text-white">Platypus</h1>

          <p className="text-gray-700 dark:text-gray-300">
            Platypus is a Customer Relationship Management (CRM) software written by Tucows which Beamspeed utilizes for accounts payable, service provisioning, and customer care.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            This document serves to document site specific information about Platypus regarding dependent and/or external applications which were developed to assist in customer management from within the Platypus system.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            For detailed documentation regarding Platypus, please see the Platypus website, or the Platypus Help file provided in the Platypus Client.
          </p>

          <nav className="space-y-2 overflow-x-auto">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 break-words">
              <li>
                <a href="#custom-applications" className="hover:text-blue-600 dark:hover:text-blue-400">Custom Applications</a>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    <a href="#diagnostics" className="hover:text-blue-600 dark:hover:text-blue-400">Diagnostics</a>
                  </li>
                  <li>
                    <a href="#service-provisioning" className="hover:text-blue-600 dark:hover:text-blue-400">Service Provisioning</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#deploying-applications" className="hover:text-blue-600 dark:hover:text-blue-400">Deploying Applications</a>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    <a href="#rolling-back" className="hover:text-blue-600 dark:hover:text-blue-400">Rolling Back Deployed Versions</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <section id="custom-applications" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Custom Applications</h2>
            <p className="text-gray-700 dark:text-gray-300">
              All internally developed applications are hosted on Beamspeed's private, Git-backed version control system, Gitlab, hosted at gitlab.beamspeed.net.
            </p>
          </section>

          <section id="diagnostics" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Diagnostics</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Several in-house applications have been written to provide simplified managmement, and diagnostics of various Beamspeed within the Platypus client via the Service Command Web Viewer.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              These applications range in complexity; some perform simple SQL queries, while others perform combinations of SQL, SNMP, and custom API calls depending on service being accessed. These applications are hosted on gitlab.beamspeed.net/platypus and are denoted with the suffix '-diag.'
            </p>
          </section>

          <section id="service-provisioning" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Service Provisioning</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Service provisioning programs allow the Platypus client to provision various backend services such as Email, RADIUS, and broadband provisioning systems via the Platypus' External User Manager (UM).
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Some applicaitons exist internally in Platypus User Manager as Scripting Commands written in either JScript or VBScript. Other programs are hosted externally from Platypus in Beamspeed application servers. Platypus interfaces with these applications over the Platypus Unix Daemon.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              See Beamspeed's documentation on Writing External User Manager commands for an example UM script.
            </p>
          </section>

          <section id="deploying-applications" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Deploying Applications</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Most applicaitons are written in Ruby, utilize Bundler for dependency management, and Capistrano 3.x for application deployment.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Capistrano is "…a remote server automation and deployment tool written in Ruby" called Capistrano. It automates the entire deployment procedure including copying the application to the application server, configuring the application environment, copying app config files, and actually deploying the application.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Unless otherwise noted in the application's README, an app may be deployed by using the following procedure. We will use the wimax-svc application for our example.
            </p>
              
             
             
                <TerminalCard>
                  {`git checkout http://gitlab.beamspeed.net/platypus/platypus-wimax-svc`}
                  {' '}
                  {`cd platypus-wimax-svc`}
                  {' '}
                  {`Modify config.yml with application specific parameters.`}
                  {' '}
                  {`cap production deploy`}
              </TerminalCard>
         
            <p className="text-gray-700 dark:text-gray-300">
              The application will then installed on an application server at the path specified in deploy_to of config/deploy.rb, and several application symlinks will be created in /usr/local/platpusd/secure_dir/ which allow the Platypus Daemon to execute the command.
            </p>
          </section>

          <section id="rolling-back" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Rolling Back Deployed Versions</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Sofware development is hard work, and sometimes applications are deployed which contain unforseen bugs. When these bugs are encountered it may be necessary for the developer to revert to a previously deployed, known functioning version of the application to ensure business operations while they deubg the issue.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By default, Capistrano keeps 5 previous releases cached on the server to allow quick rollback if necessary. To rollback to the previously deployed (stable) release, simply execute:
            </p>
            <TerminalCard>{`cap production deploy:rollback`}</TerminalCard>
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
