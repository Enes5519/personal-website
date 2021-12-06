import Head from "next/head";
import { getAllNodes } from "next-mdx/server";
import Layout from "@/components/Layout";
import { Post } from "@/types";
import BlogList from "@/components/BlogList";

export interface BlogProps {
  posts?: Post[];
}

const Home = ({ posts }: BlogProps) => (
  <Layout>
    <Head>
      <title>Enes Yıldırım | Kişisel Blog</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="c-small py-16">
      <h1>Hoşgeldiniz, ben Enes</h1>
      <p className="mt-6">Front-end teknolojileri, linux, psikoloji gibi konularla yakından ilgileniyorum.</p>
    </div>
    <div className="c-small py-16">
      <h2>Son Bloglarım</h2>
      <BlogList posts={posts} />
    </div>
  </Layout>
);

export async function getStaticProps() {
  const posts = await getAllNodes<Post>("post");

  return {
    props: {
      posts: posts?.slice(0, 3),
    },
  };
}

export default Home;
