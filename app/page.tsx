"use client";
import React from "react";
import Navigation from "./components/Navigation";
import About from "./about";
import { usePathname } from "next/navigation";
import Dropdown from "@/components/Dropdown/Dropdown";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const isLandingPage = path === "/";

  return (
    <main className="flex flex-col min-h-screen items-center bg-white text-black dark:bg-black dark:text-white">
      <Navigation />
      <Dropdown />
      <div className="flex min-h-screen my-8 md:my-36 mx-6 md:w-1/2 lg:w-1/3">
        {isLandingPage ? <About /> : null}
        {children}
      </div>
    </main>
  );
};

export default Layout;
