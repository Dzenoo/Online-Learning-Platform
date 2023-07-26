"use client";
import { Footer, MainNavigation } from "@/components/landing";
import "./globals.css";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { InstructorProvider } from "@/context/InstructorContext";

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
    pathname === "/instructor-dashboard/new-course" ||
    pathname === "/instructor-dashboard/new-course/manage";
  const isLoginPathname = pathname === "/signup" || pathname === "/login";
  const showBoolean = !isInstructorPathname && !isLoginPathname;

  return (
    <html lang="en">
      <body>
        {showBoolean && <MainNavigation />}
        <InstructorProvider>{children}</InstructorProvider>
        <Footer />
      </body>
    </html>
  );
}
