import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from '@/app/lib/aos'

export const metadata = {
  title: "Mekarharja",
  description: "Website Profil Desa Mekarharja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        {children}
      </body>
    </html>
  );
}
