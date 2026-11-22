import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimationProvider from "@/components/AnimationProvider";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "Montara | A Stay to Remember",
  description: "Discover thoughtful comfort, warm hospitality and a boutique hotel experience at Montara.",
  applicationName: "Montara"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ivory font-sans text-ink antialiased">
        <Header/>
        <AnimationProvider/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
