"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function CircuitInformationPage() {
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
              <BreadcrumbPage>Circuit Information</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6 w-full overflow-hidden">
          <h1 className="text-3xl font-bold break-all dark:text-white">Circuit Information</h1>

          <p className="text-gray-700 dark:text-gray-300">
            This document contains third-party information for leased, third-party network circuits & services.
          </p>

          <div className="space-y-4 w-full overflow-hidden">
            <h2 className="text-2xl font-semibold break-all dark:text-white">Table of Contents</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li className="break-all">
                <a href="#level3-wavelength" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  Level 3 Wavelength to PhoenixNAP
                </a>
              </li>
              <li className="break-all">
                <a href="#transtelco-ross" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  Transtelco Ross to Industry Way (Level 3 wavelength demarc)
                </a>
              </li>
              <li className="break-all">
                <a href="#transtelco-mexicali" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
                  Transtelco point-to-point to Mexicali
                </a>
              </li>
            </ul>
          </div>

          <section id="level3-wavelength" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">
              Level 3 Wavelength to PhoenixNAP
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold dark:text-white">Organization</p>
                  <p className="text-gray-700 dark:text-gray-300">Beamspeed LLC</p>
                </div>
                <div>
                  <p className="font-semibold dark:text-white">Billing Account Name</p>
                  <p className="text-gray-700 dark:text-gray-300">Beamspeed LLC</p>
                </div>
                <div>
                  <p className="font-semibold dark:text-white">Service Identifier</p>
                  <p className="text-gray-700 dark:text-gray-300">BCKD6266</p>
                </div>
                <div>
                  <p className="font-semibold dark:text-white">Product</p>
                  <p className="text-gray-700 dark:text-gray-300">Wavelength</p>
                </div>
                <div>
                  <p className="font-semibold dark:text-white">Bandwidth</p>
                  <p className="text-gray-700 dark:text-gray-300">GE</p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">A Location</h3>
                  <div className="pl-4 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">Name: YUMA - ILA</p>
                    <p className="text-gray-700 dark:text-gray-300">Demarc: 001.H101..001.002.001 ports 10 & 4</p>
                    <p className="text-gray-700 dark:text-gray-300">Address: 1276 E 21ST ST, Yuma, AZ USA</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Z Location</h3>
                  <div className="pl-4 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">Name: Phoenix, AZ - Level 3 Metro POP</p>
                    <p className="text-gray-700 dark:text-gray-300">Address: 3402 E University DR, Phoenix, AZ USA</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-4">
                See Level 3's Service Assurance Escalation Matrix for support contact information. 
                Wavelength services are classified under "Transport /Infrastructure / Colocation."
              </p>
            </div>
          </section>

          <section id="transtelco-ross" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">
              Transtelco Ross to Industry Way (Level 3 wavelength demarc)
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold dark:text-white">Service ID</p>
                  <p className="text-gray-700 dark:text-gray-300">1-13787709</p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">A Location</h3>
                  <div className="pl-4 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">Name: ELC - Beamspeed (TomWise POP)</p>
                    <p className="text-gray-700 dark:text-gray-300">Address: 698 Ross Ave, El Centro, CA 92243</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Z Location</h3>
                  <div className="pl-4 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">Name: Level 3 ILA</p>
                    <p className="text-gray-700 dark:text-gray-300">Address: 1202 Industry Way, El Centro, CA 92243</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="transtelco-mexicali" className="space-y-6">
            <h2 className="text-2xl font-semibold scroll-mt-16 dark:text-white">
              Transtelco point-to-point to Mexicali
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold dark:text-white">Customer Name</p>
                  <p className="text-gray-700 dark:text-gray-300">Beamspeed LLC</p>
                </div>
                <div>
                  <p className="font-semibold dark:text-white">Customer ID</p>
                  <p className="text-gray-700 dark:text-gray-300">1-37D6C</p>
                </div>
                <div>
                  <p className="font-semibold dark:text-white">Service ID</p>
                  <p className="text-gray-700 dark:text-gray-300">1-13790069</p>
                </div>
                <div>
                  <p className="font-semibold dark:text-white">Installation Date</p>
                  <p className="text-gray-700 dark:text-gray-300">Tuesday, February 07, 2012</p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">A Location</h3>
                  <div className="pl-4 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">Name: ELC - Beamspeed (TomWise POP)</p>
                    <p className="text-gray-700 dark:text-gray-300">Demarc: FDP1:Pos1.,2</p>
                    <p className="text-gray-700 dark:text-gray-300">Address: 698 Ross Ave, El Centro, CA 92243</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Z Location</h3>
                  <div className="pl-4 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">Name: MXL-Troncatel - Beamspeed Colocation</p>
                    <p className="text-gray-700 dark:text-gray-300">Demarc: cr1.mxl1:Fa1/0/48</p>
                    <p className="text-gray-700 dark:text-gray-300">Address: Madero # 641 Altos, Colonia Centro, Mexicali, B. C.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
