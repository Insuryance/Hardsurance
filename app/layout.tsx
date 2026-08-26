import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Hardsurance — Insurance CoPilot for Hardware", template: "%s · Hardsurance" },
  description: "Map assets, compare quotes, interrogate policies and design better insurance for hardware companies.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://hardsurance.com"),
  openGraph: { title: "Hardsurance — Insurance CoPilot for Hardware", description: "Insurance intelligence for the physical world.", images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "Hardsurance — Insurance CoPilot for Hardware", description: "Insurance intelligence for the physical world.", images: ["/og.png"] },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
