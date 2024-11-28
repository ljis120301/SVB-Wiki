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

export default function CustomersPage() {
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
              <BreadcrumbPage>Customers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">Customer Overview</h1>

          <p className="text-gray-700 dark:text-gray-300">
            Network configuration and details for our enterprise customers.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* ClearTalk Card */}
            <div className="h-full">
              <Link href="/customers/cleartalk" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white">ClearTalk Wireless</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    Layer 2 and Layer 3 transport configurations for ClearTalk's TDMoIP circuits between El Centro and Yuma.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                    View details →
                  </div>
                </div>
              </Link>
            </div>

            {/* Cocopah Card */}
            <div className="h-full">
              <Link href="/customers/cocopah" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white">Cocopah Indian Tribe</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    Network configuration for Cocopah tribal facilities including Water Users, PD, Housing, and RV Park connections.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                    View details →
                  </div>
                </div>
              </Link>
            </div>

            {/* Quechan Card */}
            <div className="h-full">
              <Link href="/customers/quechan" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white">Quechan IP Subnets</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    IP subnet allocations and configurations for Quechan tribal facilities and services.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                    View details →
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Customer Documentation</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              This section contains detailed network configurations and documentation for our enterprise customers. Each customer page includes specific network details, IP assignments, and configuration templates.
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