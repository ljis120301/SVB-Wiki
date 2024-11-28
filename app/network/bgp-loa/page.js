"use client"

import { useState } from "react"
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
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"

export default function BGPLOAPage() {
  const [ipv4Prefixes, setIpv4Prefixes] = useState([
    { ip: "65.49.160.0", mask: "/19" },
    { ip: "65.49.209.0", mask: "/24" },
    { ip: "65.49.210.0", mask: "/24" },
    { ip: "65.49.212.0", mask: "/22" },
    { ip: "65.49.216.0", mask: "/21" },
    { ip: "65.49.224.0", mask: "/22" },
    { ip: "65.49.228.0", mask: "/22" },
    { ip: "65.49.240.0", mask: "/21" },
    { ip: "68.64.234.0", mask: "/24" },
    { ip: "208.47.96.0", mask: "/21" },
  ])
  
  const [ipv6Prefixes] = useState([
    { ip: "2606:E580::", mask: "/32" }
  ])
  
  const [sortConfig, setSortConfig] = useState({
    key: 'ip',
    direction: 'asc'
  })

  const handleSort = (key) => {
    const direction = 
      sortConfig.key === key && sortConfig.direction === 'asc' 
        ? 'desc' 
        : 'asc';
    
    const sorted = [...ipv4Prefixes].sort((a, b) => {
      if (direction === 'asc') {
        return a[key].localeCompare(b[key])
      } else {
        return b[key].localeCompare(a[key])
      }
    })

    setIpv4Prefixes(sorted)
    setSortConfig({ key, direction })
  }

  const getSortIndicator = (columnKey) => {
    if (sortConfig.key === columnKey) {
      return sortConfig.direction === 'asc' ? '↑' : '↓'
    }
    return ''
  }

  return (
    <div className="p-6 w-full">
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

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6 space-y-8">
            {/* IPv4 Table */}
            <div>
              <h3 className="font-semibold mb-4 dark:text-white">IPv4 Prefixes:</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
                      onClick={() => handleSort('ip')}
                    >
                      IP Address {getSortIndicator('ip')}
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
                      onClick={() => handleSort('mask')}
                    >
                      Subnet Mask {getSortIndicator('mask')}
                    </TableHead>
                    <TableHead className="text-gray-900 dark:text-gray-100">
                      CIDR
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ipv4Prefixes.map((prefix, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-gray-800 dark:text-gray-200">
                        {prefix.ip}
                      </TableCell>
                      <TableCell className="font-mono text-gray-800 dark:text-gray-200">
                        {prefix.mask}
                      </TableCell>
                      <TableCell className="font-mono text-gray-800 dark:text-gray-200">
                        {prefix.ip + prefix.mask}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* IPv6 Table */}
            <div>
              <h3 className="font-semibold mb-4 dark:text-white">IPv6 Prefix:</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-900 dark:text-gray-100">
                      IP Address
                    </TableHead>
                    <TableHead className="text-gray-900 dark:text-gray-100">
                      Subnet Mask
                    </TableHead>
                    <TableHead className="text-gray-900 dark:text-gray-100">
                      CIDR
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ipv6Prefixes.map((prefix, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-gray-800 dark:text-gray-200">
                        {prefix.ip}
                      </TableCell>
                      <TableCell className="font-mono text-gray-800 dark:text-gray-200">
                        {prefix.mask}
                      </TableCell>
                      <TableCell className="font-mono text-gray-800 dark:text-gray-200">
                        {prefix.ip + prefix.mask}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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
  )
}
