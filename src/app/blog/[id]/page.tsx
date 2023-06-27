"use client";
import React from "react";
import { useParams } from "next/navigation";
import { getData } from "@/services/getData";

const Article = async () => {
  const { id } = useParams();

  const data = await getData(`/posts/${id}`);

  return (
    <div>
      <h1 className="text-xl">Article {data.id}</h1>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <p className="italic">Written by user: {data.userId}</p>
    </div>
  );
};

export default Article;
