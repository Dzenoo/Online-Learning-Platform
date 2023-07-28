"use client";

import dynamic from "next/dynamic";

import { Footer } from "@/components/landing";
const MainNavigation = dynamic(
  () => import("@/components/shared/navigation/MainNavigation"),
  { ssr: false }
);

import "./globals.css";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { InstructorProvider } from "@/context/InstructorContext";
import { getAuthData } from "@/utility/helpers";
import { StudentProvider } from "@/context/StudentContext";

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
  const authData = getAuthData();

  return (
    <html lang="en">
      <body>
        {authData?.typeAuth === "instructor" ? (
          <InstructorProvider>
            {showBoolean && <MainNavigation />}
            {children}
          </InstructorProvider>
        ) : (
          <StudentProvider>
            {showBoolean && <MainNavigation />}
            {children}
          </StudentProvider>
        )}
        <Footer />
      </body>
    </html>
  );
}
