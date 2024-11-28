"use client";

import { useState, useEffect } from "react";
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
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home,
  Network,
  Map,
  AlertTriangle,
  FileText,
  Settings,
  User2,
  Folder,
} from "lucide-react";
import Image from "next/image";

const routes = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Customer",
    icon: Folder,
    href: "/customers",
  },
  {
    title: "Expedience",
    icon: Folder,
    href: "/expedience",
  },
  {
    title: "Guide",
    icon: Folder,
    href: "/guide",
  },
  {
    title: "Microtik",
    icon: Folder,
    href: "/microtik",
  },
  {
    title: "Network",
    icon: Folder,
    href: "/network",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function AppSidebar() {
  const { open, toggle } = useSidebar();

  return (
    <Sidebar 
      open={open} 
      onToggle={toggle} 
      collapsible="icon"
      className="bg-background dark:bg-background-dark"
    >
      <SidebarHeader className="border-b border-border dark:border-border-dark h-[65px] flex items-center justify-center">
        <div className="flex justify-center w-full">
          <a href="/">
            <Image
              src={open ? "/Transparent-Logo.png" : "/Favicon-Transparent.ico"}
              alt="SVB Logo"
              width={open ? 180 : 50}
              height={open ? 180 : 50}
              className={`select-none ${!open ? 'py-1.5' : ''}`}
              priority
            />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="text-foreground dark:text-foreground-dark hover:bg-secondary dark:hover:bg-secondary-dark"
                  >
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
      <SidebarFooter className="border-t border-border dark:border-border-dark p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-foreground dark:text-foreground-dark hover:bg-secondary dark:hover:bg-secondary-dark">
              <User2 className="h-4 w-4" />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
