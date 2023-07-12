import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ExpertEase Learning Application",
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
      <body>{children}</body>
    </html>
  );
}
