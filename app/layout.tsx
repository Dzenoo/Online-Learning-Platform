"use client";
import { Footer, MainNavigation } from "@/components/landing";
import "./globals.css";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Online Learning Application",
  description:
    "Online learning application for students and teachers. Build your skills with online courses, certificates, online quizzes and much more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInstructorPathname =
    pathname === "/instructor-dashboard" ||
    pathname === "/instructor-dashboard/courses" ||
    pathname === "/instructor-dashboard/new-course";

  return (
    <html lang="en">
      <body>
        {!isInstructorPathname && <MainNavigation />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
