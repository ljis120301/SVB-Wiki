"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function NetworkPage() {
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
              <BreadcrumbPage>Network</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">Network Overview</h1>

          <p className="text-gray-700 dark:text-gray-300">
            Network infrastructure documentation including BGP, LTE, and circuit information.
          </p>

          <div className="space-y-8">
            {/* LTE Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">LTE Infrastructure</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-full">
                  <Link href="/network/lte/Decoding-ZTE-DHCP-Client-ID" className="block h-full">
                    <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                      <h2 className="text-xl font-semibold mb-3 dark:text-white">Decoding ZTE DHCP Client ID</h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                        Decoding ZTE DHCP Client ID for use with Mikrotik RouterOS.
                      </p>
                      <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                        View details →
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="h-full">
                  <Link href="/network/lte/vGW-BGP-Helper" className="block h-full">
                    <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                      <h2 className="text-xl font-semibold mb-3 dark:text-white">vGW BGP Helper</h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                        vGW BGP Helper for Mikrotik RouterOS.
                      </p>
                      <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                        View details →
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>

            {/* BGP and Circuit Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">BGP & Circuit Information</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-full">
                  <Link href="/network/bgp-loa" className="block h-full">
                    <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                      <h2 className="text-xl font-semibold mb-3 dark:text-white">BGP Letter of Authorization</h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                        Official BGP LOA documentation for upstream providers including authorized prefixes and ASN information.
                      </p>
                      <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                        View LOA →
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="h-full">
                  <Link href="/network/circuit-information" className="block h-full">
                    <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                      <h2 className="text-xl font-semibold mb-3 dark:text-white">Circuit Information</h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                        Detailed documentation of network circuits, including provider information, circuit IDs, and technical specifications.
                      </p>
                      <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                        View circuits →
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Network Documentation</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              This section contains comprehensive documentation for our network infrastructure, including LTE configurations, BGP arrangements, and circuit details. Each subsection provides specific technical information and configuration templates.
            </p>
          </div>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}