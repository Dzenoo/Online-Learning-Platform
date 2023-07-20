import { InstructorNav } from "@/components/instructor";
import React from "react";

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <InstructorNav />
      {children}
    </section>
  );
}
