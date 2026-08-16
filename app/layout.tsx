import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QBCore — One philosophy. Multiple platforms. Built for roleplay.",
  description:
    "QBCore is a cross-platform open-source framework ecosystem for building roleplay experiences across UGC platforms. FiveM built the foundation. Roblox is the first expansion. UEFN is next.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0d0d0f] text-[#e8e8e8]">
        {children}
      </body>
    </html>
  );
}
