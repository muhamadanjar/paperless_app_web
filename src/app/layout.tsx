// import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


import { AuthProvider } from "@/context/AuthProvider";
import ThemeRegistry from "@/components/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paperless Exam",
  description: "Paperless App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>

        <AuthProvider>
          {children}
        </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
