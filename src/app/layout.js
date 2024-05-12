import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        {children}
        <footer>Paranatural Ltd</footer>
      </body>
    </html>
  );
}
