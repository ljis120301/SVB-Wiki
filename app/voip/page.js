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

export default function VoipPage() {
  return (
    <div className="p-6 w-full">
      <div className="w-full overflow-hidden">
        <Breadcrumb className="mb-6 w-full overflow-hidden">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="whitespace-nowrap">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="whitespace-nowrap">VOIP</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold whitespace-normal dark:text-white">VOIP Overview</h1>

          <p className="text-gray-700 dark:text-gray-300 whitespace-normal">
            Voice over IP configurations and provisioning documentation.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Gila Electronics Card */}
            <div className="h-full">
              <Link href="/voip/gila-electronics" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white whitespace-normal overflow-hidden text-ellipsis">Gila Electronics</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow whitespace-normal">
                    VOIP configuration and setup details for Gila Electronics services.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium whitespace-nowrap">
                    View details →
                  </div>
                </div>
              </Link>
            </div>

            {/* Linksys ATA Card */}
            <div className="h-full">
              <Link href="/voip/linksys-ata-provisioning" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white whitespace-normal overflow-hidden text-ellipsis">Linksys ATA Provisioning</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow whitespace-normal">
                    Configuration and provisioning documentation for Linksys ATA devices.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium whitespace-nowrap">
                    View details →
                  </div>
                </div>
              </Link>
            </div>

            {/* New Gold Inc Card */}
            <div className="h-full">
              <Link href="/voip/new-gold-inc" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white whitespace-normal overflow-hidden text-ellipsis">New Gold Inc</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow whitespace-normal">
                    VOIP setup and configuration details for New Gold Inc services.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium whitespace-nowrap">
                    View details →
                  </div>
                </div>
              </Link>
            </div>

            {/* The Filter Factory Card */}
            <div className="h-full">
              <Link href="/voip/the-filter-factory" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white whitespace-normal overflow-hidden text-ellipsis">The Filter Factory, Inc</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow whitespace-normal">
                    VOIP configuration and setup documentation for The Filter Factory services.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium whitespace-nowrap">
                    View details →
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 whitespace-normal dark:text-white">VOIP Documentation</h2>
            <p className="text-gray-600 whitespace-normal dark:text-gray-400">
              This section contains detailed VOIP configurations and documentation for various clients and devices. Each page includes specific setup instructions, provisioning details, and configuration templates.
            </p>
          </div>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 whitespace-normal dark:text-white">Last Modified</h2>
            <p className="text-gray-600 whitespace-normal dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
