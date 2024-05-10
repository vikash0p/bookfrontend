import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/utils/GlobalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBooks",
  description:"Explore an extensive library of diverse eBooks in PDF format, covering genres from fiction to non-fiction, history to fantasy. Immerse yourself in captivating stories, knowledge, and adventures at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
