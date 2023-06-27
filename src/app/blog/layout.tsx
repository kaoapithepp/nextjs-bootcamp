import React, { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1300px] h-screen m-auto">
      <section className="flex flex-col">
        <h1 className="text-4xl">Welcome to blog post</h1>
        {children}
      </section>
    </div>
  );
};

export default BlogLayout;
