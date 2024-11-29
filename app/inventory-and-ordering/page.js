"use client"

import { useEffect, useState } from 'react'
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

export default function InventoryAndOrderingPage() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="p-2 sm:p-6 w-full max-w-[2000px] mx-auto relative">
      <div className="w-full">
        <Breadcrumb className="mb-6 w-full">
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Inventory and Ordering</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full max-w-none">
          <h1 className="text-2xl sm:text-3xl font-bold break-words dark:text-white">Inventory and Ordering</h1>

          <nav className="space-y-2 overflow-x-auto">
            <h2 className="text-lg font-semibold dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 break-words">
              <li>
                <a href="#anixter-connectors" className="hover:text-blue-600 dark:hover:text-blue-400">Anixter RJ45 Connectors</a>
              </li>
              <li>
                <a href="#cable-parts" className="hover:text-blue-600 dark:hover:text-blue-400">Cable Parts</a>
              </li>
              <li>
                <a href="#cat5e-cable" className="hover:text-blue-600 dark:hover:text-blue-400">Cat5e Cable</a>
              </li>
              <li>
                <a href="#expedience-repair" className="hover:text-blue-600 dark:hover:text-blue-400">Expedience CPE Repair</a>
              </li>
              <li>
                <a href="#poe-adapters" className="hover:text-blue-600 dark:hover:text-blue-400">Expedience Outdoor PoE Adapters</a>
              </li>
              <li>
                <a href="#gray-boxes" className="hover:text-blue-600 dark:hover:text-blue-400">Gray Boxes</a>
              </li>
              <li>
                <a href="#hose-clamps" className="hover:text-blue-600 dark:hover:text-blue-400">Hose Clamps</a>
              </li>
              <li>
                <a href="#poe-connectors" className="hover:text-blue-600 dark:hover:text-blue-400">PoE DC Connectors</a>
              </li>
              <li>
                <a href="#butt-splices" className="hover:text-blue-600 dark:hover:text-blue-400">Red Butt Splices</a>
              </li>
              <li>
                <a href="#wall-mounts" className="hover:text-blue-600 dark:hover:text-blue-400">Wall Mounts</a>
              </li>
            </ul>
          </nav>

          <section id="anixter-connectors" className="space-y-6 lg:grid lg:grid-cols-[1fr,2fr] lg:gap-8 lg:space-y-0">
            <div>
              <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Anixter RJ45 Connectors - Clear Jacks</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Ordered from Anixter International through sales agent Mike Cecini (
                <a href="mailto:mike.cecini@anixter.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                  mike.cecini@anixter.com
                </a>
                ).
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                <Table className="w-full">
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Manufacturer</TableCell>
                      <TableCell>Tyco Electronics</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Manufacturer Part #</TableCell>
                      <TableCell>5-557315-4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Anixter Part #</TableCell>
                      <TableCell>148646</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Order Quantity</TableCell>
                      <TableCell>1,000 Clear Jacks (Not packs. Clarify to sales agent)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium dark:text-gray-200">Order Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>E-mail sales agent and place order for desired quantity</li>
                  <li>Obtain order total</li>
                  <li>Provide agent PO number from PO book authorizing purchase</li>
                </ol>
              </div>
            </div>
          </section>

          <section id="cat5e-cable" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Cat5e Cable</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-gray-200">10 ft Cables</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ordered from MonoPrice.com
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">Product: 10 ft Cat5e Ethernet Network Cable</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium dark:text-gray-200">1000 ft Cables</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ordered from CAT5E Cable Guy. Average delivery time is 2 weeks.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-4">
                <p className="font-medium dark:text-white">Product: 1000FT Cat5e UV-Resistant CMX Outdoor Bulk Cable</p>
                
                <div>
                  <h4 className="font-medium mb-2 dark:text-white">Order 1</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Dispensing Type / Color: Pull Box (White)</li>
                    <li>Quantity: 10</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 dark:text-white">Order 2</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Dispensing Type / Color: Pull Box (Black)</li>
                    <li>Quantity: 5</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="expedience-repair" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Expedience CPE Repair</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <Table className="w-full table-fixed">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2 xl:w-2/3">Item</TableHead>
                    <TableHead className="w-1/4 xl:w-1/6">Part Number</TableHead>
                    <TableHead className="w-1/4 xl:w-1/6">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Linear Power Supply, 15V 1.66A</TableCell>
                    <TableCell>597-5121-0104</TableCell>
                    <TableCell>$11.11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>AC Cord, USA 4 FT</TableCell>
                    <TableCell>420-0060-0010</TableCell>
                    <TableCell>$5.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Indoor power supply / Linear Power Supply, 16.9W Wall MT Adapter</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>$10.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section id="poe-adapters" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Expedience Outdoor PoE Adapters</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Supplier</TableCell>
                    <TableCell>PC Engines</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Part Number</TableCell>
                    <TableCell>poe1a2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Contact</TableCell>
                    <TableCell>Contact Goose to order units</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section id="gray-boxes" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Gray Boxes</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Order Quantity</TableCell>
                    <TableCell>200 at a time (minimum 60 grey)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Contact</TableCell>
                    <TableCell>Carter handles ordering</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section id="hose-clamps" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Hose Clamps</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium dark:text-gray-200">Site Login Information</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg h-full">
                  <Table className="w-full">
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Username</TableCell>
                        <TableCell>Beamspeed</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Password</TableCell>
                        <TableCell>gooseh</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium dark:text-gray-200">Order Information</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg h-full">
                  <Table className="w-full">
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Product</TableCell>
                        <TableCell>Power Seal Hose Clamps</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Part No.</TableCell>
                        <TableCell>BR-62028H</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Price</TableCell>
                        <TableCell>$5.50 (box of 10 clamps)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Effective Diameter Range</TableCell>
                        <TableCell>28 - 1-5/16"-2-1/4"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Order Quantity</TableCell>
                        <TableCell>20 boxes (200 clamps total)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </section>

          <section id="poe-connectors" className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">PoE DC Connectors</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ordered from Mouser Electronics through Lazaro Guerro with Gila Electronics.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Part Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Small prong</TableCell>
                    <TableCell>172-1370</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Big prong</TableCell>
                    <TableCell>172-0014</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section id="butt-splices" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Red Butt Splices</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Contact</TableCell>
                    <TableCell>Robert Henderson handles ordering of this product</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section id="wall-mounts" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">Wall Mounts</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Ordered from Stark Electronic's
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Product</TableCell>
                    <TableCell>ezwb4 wall mount</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quantity</TableCell>
                    <TableCell>100 per-order</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Price</TableCell>
                    <TableCell>$6.99/ea</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Shipping</TableCell>
                    <TableCell>$124</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <div className="mt-8 p-4 border dark:border-gray-700 rounded-lg overflow-x-auto">
            <h2 className="text-xl font-semibold mb-2 break-words dark:text-white">Last Modified</h2>
            <p className="text-gray-600 break-words dark:text-gray-400">
              Last update: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 z-50 dark:bg-blue-700 dark:hover:bg-blue-800"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  )
}
