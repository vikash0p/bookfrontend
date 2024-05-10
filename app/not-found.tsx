'use client'
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center gap-5">
      <Image
        src={
          "https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788956.jpg?w=740&t=st=1715081708~exp=1715082308~hmac=363f217089aa434ad7e49005ff870d9d41b12f551f707ff3b26f27195c5fbc48"
        }
        alt="notFound"
        width={400}
        height={500}
        className="object-contain w-96 h-72 object-center"
      />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="px-8 py-2 bg-violet-800 rounded-none">
        Return Home
      </Link>
    </div>
  );
}
