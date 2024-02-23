import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteMetaData = {
  title: "DevBytes Junction",
  description:
    "DevBytes Junction: Your go-to destination for software developers to explore coding practices, programming languages, and development tools in a vibrant online community.",
};

export const metadata: Metadata = {
  ...siteMetaData,
  openGraph: {
    ...siteMetaData,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
