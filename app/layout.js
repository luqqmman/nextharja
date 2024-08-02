import "./globals.css";
import { AOSInit } from '@/app/lib/aos'

export const metadata = {
  title: "Website Profil Desa Mekarharja",
  description: "Website Profil Desa Mekarharja",
  other: {  "google-site-verification": "PWWZl4FcL3CrnYAhZtpOlW7rMDtuKuZnO35AAzhBo0g" }
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
