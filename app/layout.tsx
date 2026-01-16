import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GG",
  description: "Digital homepage of GG",
  metadataBase: new URL("https://250115ggmf-website.vercel.app"),
  openGraph: {
    title: "GG",
    description: "Digital homepage of GG",
    url: "https://250115ggmf-website.vercel.app",
    siteName: "GG",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "GG",
    description: "Digital homepage of GG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
