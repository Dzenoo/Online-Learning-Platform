"use client";
import { InstructorNav } from "@/components/instructor";
import { InstructorContext } from "@/context/InstructorContext";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

export const metadata: Metadata = {
  title: "Instructor Dashboard",
};

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentStep } = useContext(InstructorContext);
  const path = usePathname();
  const isCreating = path === "/instructor-dashboard/new-course";

  return (
    <section>
      <InstructorNav />
      {isCreating && (
        <div
          className={`bg-purple-700 h-2 w-[25%] transition-all ${
            (currentStep === 1 && "w-[50%]") ||
            (currentStep === 2 && "w-[75%]") ||
            (currentStep === 3 && "w-[100%]") ||
            (currentStep === 4 && "w-[100%]")
          }`}
        ></div>
      )}
      {children}
    </section>
  );
}
