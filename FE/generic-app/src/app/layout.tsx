import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabino website",
  description: "Sabino website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </PrimeReactProvider>
  );
}
