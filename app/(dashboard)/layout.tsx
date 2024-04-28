import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";
import { ThemeProvider } from "@/components/theme-provider";

interface DashboardLayoutProps {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  </ThemeProvider>
  );
};

export default DashboardLayout;
