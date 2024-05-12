import { sql } from "@vercel/postgres";
import Image from "next/image";
export default async function Home () {
const posts = await sql`SELECT * FROM posts`;

  return ( <div>
    <h1>Paranatural Catagories</h1>
    {posts.rows.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.name}</h3>
          <p>{post.description}</p>
          <Image src={`/${post.name}.jpg`} alt={post.name}width={300}
              height={300}/>
          </div>
      );
    })}
  </div>
  ); 
}