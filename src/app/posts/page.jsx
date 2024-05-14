import postStyles from "@/app/page.module.css";
import Link from "next/link";
export default function posts({ children }) {
    return (
      <html lang="en">
        <body>
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
          <main className="flex">
        <div>
          <img src="../Paranatural.jpg" alt="Paranatural" />
        </div>
      </main>
          {children}
        </body>
      </html>
    );
  }