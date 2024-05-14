import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SinglePost({ params }) {
  const result = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  const post = result.rows[0];

  async function editPost(formData) {
    "use server";
    const name = formData.get("name");
    const description = formData.get("description");

    await sql`UPDATE posts SET name=${name}, description=${description} WHERE id = ${params.id}`;

    revalidatePath("/posts");
    revalidatePath(`/posts/${params.id}`);

    redirect(`/posts/${params.id}`);
  }

  return (
    <div>
      <form action={editPost}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Post Name"
          defaultValue={post.name}
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          defaultValue={post.description}
          rows={5}
        ></textarea>

        <button>Submit Changes</button>
      </form>
    </div>
  );
}