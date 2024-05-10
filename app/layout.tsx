import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santos Enoque - Software Engineer",
  description:
    "Santos is a software engineer with 6 years of experience. With pasion for mobile / web development and machine learing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative `}>
        <div className="bg-[#fbe2e3]  absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] blur-[10rem] sm:w-[68.75rem] rounded-full -z-10"></div>
        <div className="bg-[#dbd7fb]  absolute top-[-1rem] left-[35rem] h-[31.25rem] w-[50rem] blur-[10rem] sm:w-[68.75rem] rounded-full md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]  -z-10"></div>
        <div></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
