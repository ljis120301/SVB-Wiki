"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function BGPLOAPage() {
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
              <BreadcrumbLink href="/network">Network</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="break-all">
              <BreadcrumbPage>BGP LOA</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">BGP Letter of Authorization</h1>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-700 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">Letter of Authorization</h2>
              <p className="text-gray-600 dark:text-gray-400">January 6th, 2016</p>
            </div>

            <div className="mb-8">
              <p className="font-semibold mb-4 dark:text-white">From:</p>
              <div className="pl-4 text-gray-700 dark:text-gray-300">
                <p>BEAMSPEED</p>
                <p>2481 E PALO VERDE ST</p>
                <p>YUMA, AZ 85365</p>
              </div>
            </div>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Hereby authorizes our upstreams: First Class Hosting, TeliaSonera, and Transtelco to route the following prefixes and more specifics:
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-4 dark:text-white">IPv4 Prefixes:</h3>
              <div className="space-y-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                <p>CIDR: 65.49.160.0/19</p>
                <p>CIDR: 65.49.209.0/24</p>
                <p>CIDR: 65.49.210.0/24</p>
                <p>CIDR: 65.49.212.0/22</p>
                <p>CIDR: 65.49.216.0/21</p>
                <p>CIDR: 65.49.224.0/22</p>
                <p>CIDR: 65.49.228.0/22</p>
                <p>CIDR: 65.49.240.0/21</p>
                <p>CIDR: 68.64.234.0/24</p>
                <p>CIDR: 208.47.96.0/21</p>
              </div>

              <h3 className="font-semibold mt-6 mb-4 dark:text-white">IPv6 Prefix:</h3>
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">IPV6: 2606:E580::/32</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold dark:text-white">ORIGIN ASN:</span> 14237
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The above service providers are authorized to provide this authorization to its upstream carriers.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Please contact me with any questions, or for verification.
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
