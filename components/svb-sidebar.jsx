"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar"
import { Home, Network, Map, AlertTriangle, FileText, Settings, User2, Folder, File, Users } from "lucide-react"
import Image from "next/image"
import { useParams } from 'next/navigation'

const getRoutes = (id) => [
  {
    title: "Dashboard",
    icon: Home,
    href: `/`
  },
  {
    title: "Customer",
    icon: Users,
    href: `/customers`
  },
  {
    title: "Expedience",
    icon: Folder,
    href: `/${id}/expedience`
  },
  {
    title: "Guide",
    icon: Folder,
    href: `/${id}/guide`
  },
  {
    title: "Microtik",
    icon: Folder,
    href: `/${id}/microtik`
  },
  {
    title: "Network",
    icon: Folder,
    href: `/${id}/network`
  },
  {
    title: "VOIP",
    icon: Folder,
    href: `/${id}/voip`
  },
  {
    title: "BGP",
    icon: File,
    href: `/${id}/bgp`
  },
  {
    title: "Brocade CES Template",
    icon: File,
    href: `/${id}/brocade-ces-template`
  },
  {
    title: "Catalyst 3750 Template",
    icon: File,
    href: `/${id}/catalyst-3750-template`
  },
  {
    title: "Dockerfile",
    icon: File,
    href: `/${id}/dockerfile`
  },
  {
    title: "Email",
    icon: File,
    href: `/${id}/email`
  },
  {
    title: "Inventory and Ordering",
    icon: File,
    href: `/${id}/inventory-and-ordering`
  },
  {
    title: "Platypus",
    icon: Folder,
    href: `/${id}/platypus`
  },
  {
    title: "Puppet",
    icon: Folder,
    href: `/${id}/puppet`
  },
  {
    title: "README",
    icon: File,
    href: `/${id}/readme`
  },
  {
    title: "Settings",
    icon: Settings,
    href: `/${id}/settings`
  },
]

export function AppSidebar() {
  const { isCollapsed } = useSidebar()
  const params = useParams()
  const routes = getRoutes(params.id)
  
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b p-4">
        {isCollapsed ? (
          <div className="flex justify-center">
            <Image
              src="/SVB-Transparent-Logo.svg"
              alt="SVB Logo"
              width={20}
              height={20}
              className="dark:invert"
              priority
            />
          </div>
        ) : (
          <h2 className="text-lg font-semibold truncate">Sun Valley Broadband</h2>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton asChild>
                    <a href={route.href}>
                      <route.icon className="h-4 w-4" />
                      <span>{route.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User2 className="h-4 w-4" />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
} 