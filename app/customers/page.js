"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function CustomersPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Customers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Content */}
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Overview of master</h1>
        
        {/* Customer List */}
        <div className="bg-white rounded-lg shadow">
          <div className="divide-y divide-gray-200">
            {/* Customer Items */}
            <CustomerLink href="/customers/cleartalk">
              ClearTalk Wireless
            </CustomerLink>
            
            <CustomerLink href="/customers/cocopah">
              Cocopah Indian Tribe
            </CustomerLink>
            
            <CustomerLink href="/customers/quechan">
              Quechan IP Subnets
            </CustomerLink>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        Back to Top
      </button>
    </div>
  )
}

// Helper component for consistent customer links
function CustomerLink({ href, children }) {
  return (
    <a 
      href={href}
      className="block px-6 py-4 hover:bg-gray-50 transition-colors"
    >
      <span className="text-gray-900 text-lg">{children}</span>
    </a>
  )
}
