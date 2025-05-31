import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title:
    "Nilesh Kumar | Frontend Developer Portfolio – React, JavaScript, UI Engineer",
  description:
    "Explore the professional portfolio of Nilesh Kumar, a skilled frontend developer specializing in React, JavaScript, and modern UI/UX. View projects, experience, and tech stack expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="font-fira">{children}</body>
    </html>
  );
}
