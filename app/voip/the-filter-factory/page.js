"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function TheFilterFactoryPage() {
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
              <BreadcrumbLink href="/voip" className="whitespace-nowrap">VOIP</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="whitespace-nowrap">The Filter Factory</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold whitespace-normal dark:text-white">The Filter Factory, Inc</h1>

          <p className="text-gray-700 dark:text-gray-300 whitespace-normal">
            VOIP configuration and setup details for The Filter Factory services.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Account Information</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Field</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Broadsoft Enterprise ID</TableCell>
                    <TableCell>5372</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DSO's</TableCell>
                    <TableCell>5</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Server Configuration</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Field</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Proxy/Domain</TableCell>
                    <TableCell>
                      <a 
                        href="https://filterfact.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        filterfact.com
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Outbound Proxy</TableCell>
                    <TableCell>
                      <a 
                        href="https://pbx.az1.commpartners.us" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        pbx.az1.commpartners.us
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Trunk Configuration</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Field</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Trunk Username</TableCell>
                    <TableCell className="font-mono">053720000100001</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Auth Username</TableCell>
                    <TableCell className="font-mono">053720000100001</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Auth Password</TableCell>
                    <TableCell className="font-mono">053720000100001</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Trunk Numbers</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Number</TableHead>
                    <TableHead>Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <a 
                        href="tel:928-315-1152" 
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        928-315-1152
                      </a>
                    </TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <a 
                        href="tel:928-627-1065" 
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        928-627-1065
                      </a>
                    </TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Broadsoft Access</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Field</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">User ID</TableCell>
                    <TableCell>
                      <a 
                        href="mailto:Gila5372@filterfact.com" 
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Gila5372@filterfact.com
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Password</TableCell>
                    <TableCell className="font-mono">AigIcpiseg</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
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
