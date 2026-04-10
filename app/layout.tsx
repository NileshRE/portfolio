import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_URL || ""),
  title:
    "Nilesh Kumar | Frontend Developer Portfolio – React, JavaScript, Zustand, UI Engineer",
  description:
    "Explore the professional portfolio of Nilesh Kumar, a skilled frontend developer specializing in React, JavaScript, and modern UI/UX. View projects, experience, and tech stack expertise.",
  authors: [
    {
      name: "Nilesh Kumar",
      url: "https://nileshkumarportfolio3105.vercel.app/",
    },
  ],
  openGraph: {
    images: ["/images/opengraph-image.png"],
  },
  twitter: {
    images: ["/images/opengraph-image.png"],
  },
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "Zustand",
    "Redux",
    "JavaScript",
    "Frontend Engineer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="font-fira">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
