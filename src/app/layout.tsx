import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: './fonts/RubikFont.ttf',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: "WorkFlow",
  description: "A Workspace for Manage Projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
