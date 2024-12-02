"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import TerminalCard from "@/components/ui/terminal-card"

export default function CleartalkPage() {
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
            <BreadcrumbPage>ClearTalk Wireless</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">ClearTalk Wireless</h1>
        <p className="text-lg text-gray-600">Customer</p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Table of Contents</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              <a href="#cust-5634" className="hover:text-blue-600">
                CUST:5634 (ClearTalk Wireless ElCentro)
              </a>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <a href="#private-transport" className="hover:text-blue-600">
                    Private Transport
                  </a>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>
                      <a href="#l2-transport" className="hover:text-blue-600">L2 Transport</a>
                    </li>
                    <li>
                      <a href="#l3-transport" className="hover:text-blue-600">L3 Transport</a>
                      <ul className="list-disc pl-8 space-y-2">
                        <li>
                          <a href="#yuma" className="hover:text-blue-600">Yuma</a>
                        </li>
                        <li>
                          <a href="#el-centro" className="hover:text-blue-600">El Centro</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="cust-5634" className="text-2xl font-semibold scroll-mt-16">
            CUST:5634 (ClearTalk Wireless ElCentro)
          </h2>
          
          <section>
            <h3 id="private-transport" className="text-xl font-semibold mb-4 scroll-mt-16">
              Private Transport
            </h3>
            
            <div className="space-y-4">
              <h4 id="l2-transport" className="text-lg font-semibold scroll-mt-16">L2 Transport</h4>
              <p>Cleartalk has layer 2 transport across the Beamspeed network through VLAN 14.</p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 id="l3-transport" className="text-lg font-semibold scroll-mt-16">L3 Transport</h4>
              <p>Beamspeed currently provides private, layer 3 MPLS-based transport for ClearTalk's TDMoIP ciruits between El Centro and Yuma.</p>
              
              <div className="space-y-4">
                <h5 id="yuma" className="text-lg font-semibold scroll-mt-16">Yuma</h5>
                <TerminalCard>{[
                  "Router: nyl-fw-01.beamspeed.net (MikroTik)",
                  "Interface: vlan115",
                  "VLAN ID: 115",
                  "VRF: CUST-5634-1",
                  "Route Distinguisher: 65002:5634001",
                  "Route Target Import: 65000:5634002",
                  "Route Target Export: 65002:5634001",
                  "Network: 10.14.1.112/28",
                  "Gateway: 10.14.1.113"
                ]}</TerminalCard>

                <h5 id="el-centro" className="text-lg font-semibold scroll-mt-16">El Centro</h5>
                <TerminalCard>{[
                  "Router: ipl-core-01.beamspeed.net (Cisco)",
                  "Interface: Fa4/0.203",
                 
                  "VLAN ID: 203",
                  
                  "VRF: CUST-5634-2",
                  
                  "Route Distinguisher: 65000:5634002",
                  
                  "Route Target Import 65002:5634001",
                  
                  "Route Target Export 65000:5634002"
                ]}</TerminalCard>
              </div>
            </div>
          </section>
        </div>

        <div className="text-sm text-gray-500 mt-8">
          Last modified: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
