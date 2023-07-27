import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.mainContainer}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
