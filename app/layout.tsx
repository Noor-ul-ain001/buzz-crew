import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Jost } from "next/font/google";
import Cursor from "@/components/motion/Cursor";
import ScrollProgress from "@/components/motion/ScrollProgress";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Buzz Crew | We tell your stories",
  description:
    "Buzz Crew is a full-service digital agency from Karachi: social media, SEO, web & software development, UI/UX and Meta ads for brands in Pakistan, the UAE and the UK.",
  icons: { icon: "/img/logo-mark.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${allura.variable} ${jost.variable} antialiased`}
    >
      <body className="min-h-full font-sans">
        <SmoothScroll />
        <ScrollProgress />
        {children}
        <Cursor />
      </body>
    </html>
  );
}
