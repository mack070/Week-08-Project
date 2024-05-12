import postStyles from "@/app/page.module.css";
import Link from "next/link";
export default function Post() {
  return (
    <div className={postStyles.maincontainer}>
      <header className={postStyles.header}>
        <h1>Paranatural Message Board</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">posts</Link>
        </nav>
      </header>

      <main className="flex">
        <div>
          <img src="../Paranatural.jpg" alt="Paranatural" />
        </div>
        <article className="flex">
          <p>A spooky image</p>
        </article>
      </main>
      <footer className={postStyles.footer}>
        <p>&copy; Paranatural Ltd</p>
      </footer>
    </div>
  );
}