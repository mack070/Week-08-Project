import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import postStyles from "@/app/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paranatural Board",
  description: "A message board for all things paranormal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Paranatural Board</h1>
          <nav>
          <Link href="../">Home</Link>
          <Link href="../posts">Posts</Link>
          <Link href="../posts/Aliens">Aliens</Link>
          <Link href="../posts/Cryptids">Cryptids</Link>
          <Link href="../posts/Supernatural">Supernatural</Link>
          </nav>
        </header>
        {children}
        <footer className={postStyles.footer}>
      <p>&copy; Paranatural Ltd</p>
      </footer>
      </body>
    </html>
  );
}
