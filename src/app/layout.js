import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://my-app-eta-weld.vercel.app/",
  title: "MSF",
  description: "America's Premier Law Firm for Sexual Abuse Cases",
  openGraph: {
    title: "MSF",
    description: "America's Premier Law Firm for Sexual Abuse Cases",
    images: ["/MetaTag.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
