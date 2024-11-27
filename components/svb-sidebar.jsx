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
import { Home, Network, Map, AlertTriangle, FileText, Settings, User2, Folder } from "lucide-react"
import Image from "next/image"

const routes = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/"
  },
  {
    title: "Customer",
    icon: Folder,
    href: "/customers"
  },
  {
    title: "Expedience",
    icon: Folder,
    href: "/expedience"
  },
  {
    title: "Guide",
    icon: Folder,
    href: "/guide"
  },
  {
    title: "Microtik",
    icon: Folder,
    href: "/microtik"
  },
  {
    title: "Network",
    icon: Folder,
    href: "/network"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings"
  }
]

export function AppSidebar() {
  const { isCollapsed } = useSidebar()
  
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