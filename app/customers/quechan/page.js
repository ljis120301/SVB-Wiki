"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ipData = [
  {
    site: "Admin",
    lan: "192.168.0.222",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.190",
    mac: "00:0C:42:F0:2C:C9"
  },
  {
    site: "Artists Market",
    lan: "",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.142",
    mac: "D4:CA:6D:CE:C3:7F"
  },
  {
    site: "ADAPP",
    lan: "10.0.11.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.149",
    mac: "00:0C:42:F0:2C:DD"
  },
  {
    site: "Business Enterprise / Pipa",
    lan: "",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.144",
    mac: "00:0C:42:F0:2C:D5"
  },
  {
    site: "CHR",
    lan: "10.0.11.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.169",
    mac: "00:0C:42:FF:12:D3"
  },
  {
    site: "Construction",
    lan: "192.168.8.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.181",
    mac: "00:0C:42:E6:65:B7"
  },
  {
    site: "Community Center",
    lan: "192.168.9.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.146",
    mac: "00:0C:42:FF:13:2F"
  },
  {
    site: "Diabetes / Wellness",
    lan: "192.168.12.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.151",
    mac: "00:0C:42:F0:2C:DB"
  },
  {
    site: "Ed Complex",
    lan: "192.168.15.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.161",
    mac: "00:0C:42:E6:65:4D"
  },
  {
    site: "Election Board / Game and Fish",
    lan: "192.168.3.254",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.171",
    mac: "00:0C:42:E6:65:A7"
  },
  {
    site: "Facilities / Maintenance",
    lan: "192.168.5.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.147",
    mac: "00:0C:42:F0:2D:01"
  },
  {
    site: "JOM",
    lan: "192.168.16.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.135",
    mac: "00:0C:42:F6:82:64"
  },
  {
    site: "Old Head Start Bldg",
    lan: "192.168.2.1",
    beamspeedLan: "",
    wan: "",
    mac: ""
  },
  {
    site: "Pesticides",
    lan: "",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.148",
    mac: "D4:CA:6D:B8:A7:93"
  },
  {
    site: "Q News",
    lan: "192.168.14.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.189",
    mac: "00:0C:42:E6:65:53"
  },
  {
    site: "QPD",
    lan: "192.168.1.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.145",
    mac: "00:0C:42:F0:2C:E1"
  },
  {
    site: "QPD Dispatch",
    lan: "192.168.6.1",
    beamspeedLan: "192.168.100.1",
    wan: "BRIDGED",
    mac: "00:0C:42:F7:94:BB"
  },
  {
    site: "Senior Center",
    lan: "192.168.10.253",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.179",
    mac: "00:0C:42:F7:94:C3"
  },
  {
    site: "Social Services / WIA",
    lan: "192.168.4.1",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.159",
    mac: "00:0C:42:F6:82:6E"
  },
  {
    site: "Tribal Court",
    lan: "192.168.7.253",
    beamspeedLan: "192.168.100.1",
    wan: "65.49.221.143",
    mac: "00:0C:42:E6:65:57"
  },
  {
    site: "Utilities / Commodities",
    lan: "192.168.13.1",
    beamspeedLan: "",
    wan: "",
    mac: ""
  }
]

export default function QuechanPage() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [filterValue, setFilterValue] = useState("");

  const sortData = (data) => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] === b[sortConfig.key]) return 0;
      
      // Handle IP address sorting
      if (sortConfig.key === 'lan' || sortConfig.key === 'wan') {
        const ipA = a[sortConfig.key].split('.').map(num => parseInt(num, 10));
        const ipB = b[sortConfig.key].split('.').map(num => parseInt(num, 10));
        
        for (let i = 0; i < 4; i++) {
          if (ipA[i] !== ipB[i]) {
            return sortConfig.direction === 'ascending' 
              ? ipA[i] - ipB[i]
              : ipB[i] - ipA[i];
          }
        }
        return 0;
      }

      // Regular string sorting
      return sortConfig.direction === 'ascending'
        ? a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
        : b[sortConfig.key] > a[sortConfig.key] ? 1 : -1;
    });
  };

  const requestSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'ascending' 
        ? 'descending' 
        : 'ascending',
    }));
  };

  const filteredData = ipData.filter(item => 
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes(filterValue.toLowerCase())
    )
  );

  const sortedData = sortData(filteredData);

  return (
    <div className="p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/customers">Customers</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Quechan IP Subnets</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Quechan IP Subnets</h1>
        <p className="text-lg text-gray-600">Customer</p>

        <div className="space-y-4">
          <Input
            placeholder="Filter..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="max-w-sm mb-4"
          />

          <div className="rounded-md border">
            <Table>
              <TableCaption>
                These are the IP subnets currently known to be in use at the Quechan Indian Tribe on the MikroTik point-to-multipoint connections from the water tower.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead onClick={() => requestSort('site')} className="cursor-pointer">
                    Site {sortConfig.key === 'site' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead onClick={() => requestSort('lan')} className="cursor-pointer">
                    LAN {sortConfig.key === 'lan' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead onClick={() => requestSort('beamspeedLan')} className="cursor-pointer">
                    Beamspeed LAN {sortConfig.key === 'beamspeedLan' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead onClick={() => requestSort('wan')} className="cursor-pointer">
                    WAN {sortConfig.key === 'wan' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </TableHead>
                  <TableHead onClick={() => requestSort('mac')} className="cursor-pointer">
                    MAC {sortConfig.key === 'mac' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedData.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.site}</TableCell>
                    <TableCell className="font-mono">{row.lan}</TableCell>
                    <TableCell className="font-mono">{row.beamspeedLan}</TableCell>
                    <TableCell className="font-mono">{row.wan}</TableCell>
                    <TableCell className="font-mono">{row.mac}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Last Modified</h2>
            <p className="text-gray-600">
              Last configuration update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
