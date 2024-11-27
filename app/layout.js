import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/svb-sidebar";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sun Valley Broadband",
  description: "Sun Valley Broadband Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-1">
              <div className="flex items-center p-4 border-b">
                <SidebarTrigger />
                <h1 className="ml-4 text-xl font-bold">
                  Sun Valley Broadband Dashboard
                </h1>
              </div>
              <div className="p-8">{children}</div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
