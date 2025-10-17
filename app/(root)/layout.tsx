import Header from "@/components/ui/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main className="min-h-screen text-gray-400">
        <Header />
        <div className="container py-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
