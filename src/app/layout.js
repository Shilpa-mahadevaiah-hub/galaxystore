import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Galaxy Store",
  description: "Your one-stop shop for all things galaxy",
  keywords: ["Electronics", "Home Appliances", "clothings", "gadgets", "galaxy store"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>    
      <body>
         <Header/>
         {children}</body>
    </html>
  );
}
