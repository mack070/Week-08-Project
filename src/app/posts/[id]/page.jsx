import postStyles from "@/app/page.module.css";
import Link from "next/link";
export default function Post() {
  return (
    <div className={postStyles.maincontainer}>
      <main className="flex">
        <div>
          <img src="../Paranatural.jpg" alt="Paranatural" />
        </div>
        <article className="flex">
        </article>
      </main>
    </div>
  );
}