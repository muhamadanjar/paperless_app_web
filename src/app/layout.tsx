import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/cache";

import { AuthProvider } from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <CacheProvider value={}> */}

      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
      {/* </CacheProvider> */}
    </html>
  );
}
