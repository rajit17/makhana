import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamal Makhana | Crunch Without Guilt",
  description:
    "Kamal Makhana is a clean, local plain makhana brand for healthy, crunchy, family-friendly snacking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
