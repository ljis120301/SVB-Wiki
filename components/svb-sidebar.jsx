"use client";

import { useState } from "react";
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
import { Home, Settings, User2, Folder } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar();
  
  return (
    <Sidebar 
      collapsible={isMobile ? "offcanvas" : "icon"}
      className={cn(
        "bg-background dark:bg-background-dark",
        "border-r border-border dark:border-border-dark",
        "[&_.fixed]:!bg-background/0",
        "[&_[role=dialog]]:!bg-background [&_[role=dialog]]:!dark:bg-background-dark",
        "[&_.fixed]:!backdrop-blur-none",
        "[&>div>.fixed]:!bg-transparent",
        "data-[state=open]:!bg-background data-[state=open]:!dark:bg-background-dark",
        "[&_[data-mobile=true]]:!bg-background [&_[data-mobile=true]]:!dark:bg-background-dark",
        "[&_[data-state=open]]:!bg-background [&_[data-state=open]]:!dark:bg-background-dark"
      )}
    >
      <SidebarHeader className="border-b border-border dark:border-border-dark h-[65px] flex items-center justify-center">
        <div className="flex justify-center w-full">
          <a href="/">
            <Image
              src={state === "expanded" && !isMobile ? "/Transparent-Logo.png" : "/Favicon-Transparent.ico"}
              alt="SVB Logo"
              width={state === "expanded" && !isMobile ? 180 : 50}
              height={state === "expanded" && !isMobile ? 180 : 50}
              className={`select-none ${state === "collapsed" || isMobile ? 'py-1.5' : ''}`}
              priority
            />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={cn(
                      "text-foreground dark:text-foreground-dark",
                      "hover:bg-secondary dark:hover:bg-secondary-dark transition-colors",
                      "[&_[data-mobile=true]]:text-foreground [&_[data-mobile=true]]:dark:text-foreground-dark",
                      "[&_[data-mobile=true]]:hover:bg-secondary [&_[data-mobile=true]]:dark:hover:bg-secondary-dark"
                    )}
                    tooltip={route.title}
                  >
                    <a 
                      href={route.href}
                      onClick={() => isMobile && setOpenMobile(false)}
                    >
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
      <SidebarFooter className="border-t border-border dark:border-border-dark p-4 mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              className={cn(
                "text-foreground dark:text-foreground-dark",
                "hover:bg-secondary dark:hover:bg-secondary-dark transition-colors",
                "[&_[data-mobile=true]]:text-foreground [&_[data-mobile=true]]:dark:text-foreground-dark",
                "[&_[data-mobile=true]]:hover:bg-secondary [&_[data-mobile=true]]:dark:hover:bg-secondary-dark"
              )}
              tooltip="Profile"
            >
              <User2 className="h-4 w-4" />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
