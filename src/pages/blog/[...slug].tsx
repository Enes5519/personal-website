import { useHydrate } from "next-mdx/client";
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import MDX_COMPONENTS from "@/components/MDX_COMPONENTS";
import { Post } from "@/types";
import Layout from "@/components/Layout";

export interface PostPageProps {
  post: Post;
}

const PostPage = ({ post }: PostPageProps) => {
  const content = useHydrate(post, {
    components: MDX_COMPONENTS,
  });

  return (
    <Layout>
      <Head>
        <title>{post.frontMatter?.title}</title>
        <meta name="description" content={post.frontMatter?.excerpt} />
      </Head>
      <article className="py-16">
        <div className="c-small">
          <h1>{post.frontMatter?.title}</h1>
          {post.frontMatter?.excerpt ? <p className="text-grey-400 mt-1">{post.frontMatter.excerpt}</p> : null}
          <hr className="my-4 text-grey-800" />
        </div>
        {content}
      </article>
    </Layout>
  );
};

export default PostPage;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<NodeJS.Dict<string[]>>) {
  const post = await getMdxNode<Post>("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
