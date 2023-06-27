import React, { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1200px] h-screen m-auto">
      <section className="flex flex-col">{children}</section>
    </div>
  );
};

export default BlogLayout;
