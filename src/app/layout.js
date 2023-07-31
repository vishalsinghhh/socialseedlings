import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import { AppProvider } from "../context/appContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SimpleSeedlings",
  description: "SimpleSeedlings | A socializing web app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <div className={styles.mainContainer}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
