import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types";

const BlogItem = ({ post }: { post: Post }) => (
    <li key={post.slug} className="my-4 gap-4 lg:gap-8 flex flex-col lg:flex-row items-center lg:items-start h-[174px]">
      {post.frontMatter?.image && (
        <Link href={post.url?.toString() || post.slug}>
          <a className="flex-shrink-0 aspect-w-4 aspect-h-3 relative w-full h-full lg:w-[232px] lg:py-0">
            <Image src={post.frontMatter.image} alt={post.frontMatter.title} layout="fill" className="rounded-lg" />
          </a>
        </Link>
      )}

      <div className="space-y-2">
        <Link href={post.url?.toString() || post.slug}>
          <a className="hover:underline">
            <h3>{post.frontMatter?.title}</h3>
          </a>
        </Link>
        <time className="block text-sm text-grey" dateTime={post.frontMatter?.date?.toUTCString()}>
          {post.frontMatter?.date?.toLocaleDateString()}
        </time>
        <p className="text-sm text-grey-300 lg:line-clamp-5">{post.frontMatter?.excerpt}</p>
      </div>
    </li>
  );

export default BlogItem;
