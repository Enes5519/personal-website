import React from "react";
import { getAllNodes } from "next-mdx/server";
import Layout from "@/components/Layout";
import { Post } from "@/types";
import BlogList from "@/components/BlogList";

export interface BlogProps {
  posts?: Post[];
}

const Blogs = ({ posts }: BlogProps) => (
  <Layout>
    <div className="c-small py-16">
      <h1>Bloglarım</h1>
      <BlogList posts={posts} />
    </div>
  </Layout>
);

export async function getStaticProps() {
  const posts = await getAllNodes<Post>("post");

  return {
    props: {
      posts,
    },
  };
}

export default Blogs;
