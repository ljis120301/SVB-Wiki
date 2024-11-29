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

export default function NewGoldIncPage() {
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
              <BreadcrumbPage className="whitespace-nowrap">New Gold Inc</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold whitespace-normal dark:text-white">New Gold Inc</h1>

          <p className="text-gray-700 dark:text-gray-300 whitespace-normal">
            VOIP configuration and setup details for New Gold Inc services.
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
                    <TableCell>2001087650</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DSO's</TableCell>
                    <TableCell>20</TableCell>
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
                    <TableCell>mymtm.us</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Outbound Proxy</TableCell>
                    <TableCell>pbx.ca1.mymtm.us</TableCell>
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
                    <TableCell>6193421621</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Auth Username</TableCell>
                    <TableCell>6193421621</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Auth Password</TableCell>
                    <TableCell className="font-mono">i7s3pdnrc65rda3pvpin</TableCell>
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
                    <TableCell>619-573-1453</TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>602-314-2201</TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>928-257-1851</TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>928-257-1855</TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>928-257-4313</TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>928-341-4653</TableCell>
                    <TableCell>US</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>416-900-3413</TableCell>
                    <TableCell>Toronto, Ontario, Canada</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>778-786-3455</TableCell>
                    <TableCell>British Columbia, Canada</TableCell>
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
