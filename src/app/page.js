import { sql } from "@vercel/postgres";
export default async function Home () {
const catagories = await SQL`SELECT * FROM catagories`
console.log(catagories)
  return ( <div>
  <h1>Paranatural Catagories</h1>
  <h3>Aliens</h3>
  <p>A message board discussing all things about Aliens from Abuctions to Unindetified Flying Objects.</p>
  <h3>Supernatural</h3>
  <p>A message board talking about all things Supernatural ranging from ghosts to Ouija boards and everything inbetween.</p>
  <h3>Cryptids</h3>
  <p>A message board debating all the varying kinds of Cryptids from the Chupacabra to Skinwalkers and anything else fully known.</p>
  </div>
  ); 
}