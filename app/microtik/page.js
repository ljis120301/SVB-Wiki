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

export default function MicrotikPage() {
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
              <BreadcrumbPage>Microtik</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">Microtik Configuration Templates</h1>

          <p className="text-gray-700 dark:text-gray-300">
            Standard configuration templates for Microtik devices used in our network.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="h-full">
              <Link href="/microtik/5ghz-template" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white">5GHz AP Template</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    Standard configuration template for 5GHz Access Points, including RADIUS setup and wireless configurations.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                    View template →
                  </div>
                </div>
              </Link>
            </div>

            <div className="h-full">
              <Link href="/microtik/sxt-cpe-template" className="block h-full">
                <div className="p-6 rounded-lg border border-border dark:border-border-dark hover:border-primary dark:hover:border-primary-dark transition-colors h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 dark:text-white">SXT CPE Template</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    Configuration template for MikroTik SXT CPE devices, including wireless setup and bridge configuration.
                  </p>
                  <div className="mt-4 text-primary dark:text-primary-dark text-sm font-medium">
                    View template →
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg w-full overflow-hidden">
            <h2 className="text-xl font-semibold mb-2 break-all dark:text-white">Template Usage</h2>
            <p className="text-gray-600 break-all dark:text-gray-400">
              These templates should be used as the base configuration for all new device deployments. Select the appropriate template based on your device type and intended use.
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