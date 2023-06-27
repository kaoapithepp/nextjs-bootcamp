import React from "react";
import Link from "next/link";
import { getData } from "@/services/getData";
import { BlogCard } from "@/components/BlogCard";

const BlogPage = async () => {
  const data = await getData("/posts");

  return (
    <section className="px-4">
      <div className="grid grid-cols-2 gap-4">
        {data.map((elem: any, key: number) => {
          return (
            <Link href={`/blog/${elem.id}`} key={key}>
              <BlogCard title={elem.title} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPage;
