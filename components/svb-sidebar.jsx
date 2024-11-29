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
import { Home, Settings, User2, Folder, UsersRound, EthernetPort, Phone, Waypoints, Network, Mail } from "lucide-react";

const AnsibleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1.252 3.456l3.75 8.75-1.842-.789-2.383-5.557-2.393 3.795-1.367-.867 4.235-5.332z" />
  </svg>
);

const PythonIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2c-2.121 0-3.5.884-4.167 2.167C7.166 5.45 7 6.667 7 8v2h5v1H6.5c-1.333 0-2.5.5-3.167 1.667C2.666 13.833 2 15.667 2 18c0 2.333.666 4.167 1.333 5.333C4 24.5 5.167 25 6.5 25h3v-4c0-1.333.5-2 1.5-2h5c1 0 1.5.667 1.5 2v4h3c1.333 0 2.5-.5 3.167-1.667C24.334 22.167 25 20.333 25 18c0-2.333-.666-4.167-1.333-5.333C23 11.5 21.833 11 20.5 11H15v-1h5V8c0-1.333-.166-2.55-.833-3.833C18.5 2.884 17.121 2 15 2h-3z" />
    <circle cx="9.5" cy="6.5" r="1" />
    <circle cx="17.5" cy="19.5" r="1" />
  </svg>
);
const NetworkSwitchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M6 8h12" />
    <path d="M6 12h12" />
    <path d="M6 16h12" />
    <circle cx="4" cy="8" r="1" fill="currentColor" />
    <circle cx="4" cy="12" r="1" fill="currentColor" />
    <circle cx="4" cy="16" r="1" fill="currentColor" />
    <circle cx="20" cy="8" r="1" fill="currentColor" />
    <circle cx="20" cy="12" r="1" fill="currentColor" />
    <circle cx="20" cy="16" r="1" fill="currentColor" />
  </svg>
);
const NetworkSwitchIcon2 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="6" width="20" height="12" rx="1" />
    <line x1="6" y1="10" x2="6" y2="14" />
    <line x1="10" y1="10" x2="10" y2="14" />
    <line x1="14" y1="10" x2="14" y2="14" />
    <line x1="18" y1="10" x2="18" y2="14" />
    <circle cx="6" cy="12" r="1" fill="currentColor" />
    <circle cx="10" cy="12" r="1" fill="currentColor" />
    <circle cx="14" cy="12" r="1" fill="currentColor" />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
  </svg>
);

const MikrotikIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3L3 8.2v7.6L12 21l9-5.2V8.2L12 3z" />
    <path d="M12 8v8" />
    <path d="M8 10v4" />
    <path d="M16 10v4" />
  </svg>
);

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
    icon: UsersRound,
    href: "/customers",
  },
  {
    title: "Expedience",
    icon: Folder,
    href: "/expedience",
  },
  {
    title: "Ansible Guide",
    icon: AnsibleIcon,
    href: "/ansible-guide",
  },
  {
    title: "Microtik",
    icon: MikrotikIcon,
    href: "/microtik",
  },
  {
    title: "Network",
    icon: Network,
    href: "/network",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "VOIP",
    icon: Phone,
    href: "/voip",
  },
  {
    title: "BGP",
    icon: Waypoints,
    href: "/bgp",
  },
  {
    title: "Brocade CES",
    icon: NetworkSwitchIcon,
    href: "/brocade-ces-template",
  },
  {
    title: "Catalyst 3750 template",
    icon: NetworkSwitchIcon2,
    href: "/catalyst-3750-template",
  },
  {
    title: "Email",
    icon: Mail,
    href: "/email",
  },
  {
    title: "Inventory and Ordering",
    icon: EthernetPort,
    href: "/inventory-and-ordering",
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
