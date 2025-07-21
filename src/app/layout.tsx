import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster as Sonner } from "sonner";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/helper/provider";

export const metadata: Metadata = {
  title: "OptimaxAI",
  description: "AI Chatbot for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <Toaster />
          <Sonner />
          {children}
        </Providers>
      </body>
    </html>
  );
}
