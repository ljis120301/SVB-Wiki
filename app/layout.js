import { ThemeProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/svb-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchProvider } from "@/lib/searchContent"
import Search from "@/components/Search"

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider defaultOpen={true}>
            <SearchProvider>
              <div className="relative flex min-h-screen">
                <AppSidebar />
                <main className="flex-1">
                  <div className="sticky top-0 z-20 flex items-center justify-between h-[65px] px-4 border-b border-border dark:border-border-dark bg-background dark:bg-background-dark">
                    <div className="flex items-center flex-1">
                      <SidebarTrigger className="relative z-50" />
                      <h1 className="ml-4 text-xl font-bold text-foreground dark:text-foreground-dark truncate">
                        Sun Valley Broadband Dashboard
                      </h1>
                    </div>
                    <div className="ml-8">
                      <ThemeToggle />
                    </div>
                  </div>
                  <div className="p-4 md:p-8">
                    <Search />
                    {children}
                  </div>
                </main>
              </div>
            </SearchProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
