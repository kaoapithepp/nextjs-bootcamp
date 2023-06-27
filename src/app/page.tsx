import { getData } from "@/services/getData";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/blog">
        <button className="p-4 bg-blue-400 rounded">To Blogs</button>
      </Link>
    </div>
  );
}
