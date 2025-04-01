import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buy Custom Wall Tapestry, Wallpapers, Rugs, Pillows, Curtains & More- Neon Earth",
  description: "Shop for Custom Wall Tapestry, Wallpapers, Rugs, Pillows, Curtains, Bags & more at NeonEarth. Elevate Your Space with Personalized Art. Create Your Perfect Home Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
