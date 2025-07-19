import React from "react";
import TopBar from "@/components/molecules/TopBar";
import Footer from "@/components/atoms/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full bg-background p-[25px] overflow-auto flex flex-col">
      <TopBar />
      <div className="flex flex-col gap-[15px] w-full pb-5 mb">{children}</div>
      <div className="mt-auto mb-[35px]">
        <Footer />
      </div>
    </main>
  );
}
