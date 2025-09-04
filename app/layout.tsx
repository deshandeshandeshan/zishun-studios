import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zishun Studios",
  description:
    "A Creative Production Company by Zed Xu 徐榛 Zed Xu (b. 1993, CN, NZ) is a filmmaker, painter and performance artist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
