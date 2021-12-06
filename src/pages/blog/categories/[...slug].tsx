import { getAllNodes, getMdxPaths, getNode } from "next-mdx";
import { Category, Post } from "types";
import { GetStaticPropsContext } from "next";
import React from "react";
import Layout from "@/components/Layout";
import BlogList from "@/components/BlogList";

export interface CategoryPageProps {
  category: Category;
  posts?: Post[];
}

const CategoryPage = ({ category, posts }: CategoryPageProps) => (
  <Layout>
    <div className="c-small py-16">
      <h1>{category.frontMatter?.name}</h1>
      <BlogList posts={posts} />
    </div>
  </Layout>
);

export default CategoryPage;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("category"),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<NodeJS.Dict<string[]>>) {
  const category = await getNode<Category>("category", context);

  if (!category) {
    return {
      notFound: true,
    };
  }

  const posts = await getAllNodes<Post>("post");

  return {
    props: {
      category,
      posts: posts.filter((post) => post.relationships?.category.some(({ slug }) => slug === category.slug)),
    },
  };
}
