import MainNavigation from "@/components/navbar/MainNavigation";
import "./globals.css";
import type { Metadata } from "next";

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
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
