import React from "react";
import Link from "next/link";
import { Post } from "@/types";

export interface BlogProps {
  posts?: Post[];
}

const BlogList = ({ posts }: BlogProps) => {
  if (posts?.length) {
    return (
      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.slug} className="my-4">
            <Link href={post.url?.toString() || post.slug}>
              <a className="hover:underline">{post.frontMatter?.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="mt-6">Hiç bir gönderi bulunamadı!</p>;
};

export default BlogList;
