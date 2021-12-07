import React from "react";
import { Post } from "@/types";
import BlogItem from "@/components/BlogItem";

export interface BlogProps {
  posts?: Post[];
}

const BlogList = ({ posts }: BlogProps) => {
  if (posts?.length) {
    return (
      <ul className="mt-6">
        {posts.map((post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </ul>
    );
  }

  return <p className="mt-6">Hiç bir gönderi bulunamadı!</p>;
};

export default BlogList;
