import { useHydrate } from "next-mdx/client";
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import rehypeHighlight from "rehype-highlight";
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
        <meta property="og:title" content={post.frontMatter?.title} />
        <meta property="og:description" content={post.frontMatter?.excerpt} />
        <meta property="og:type" content="article" />
        {post.frontMatter?.image && (
          <meta property="og:image" content={`https://enesyildirim.me${post.frontMatter.image}`} />
        )}
        <meta property="og:article:modified_time" content={post.frontMatter?.date?.toISOString()} />
        <meta property="og:article:author" content="Enes Yildirim" />
        {post.frontMatter?.category?.map((c) => (
          <meta key={c} property="og:article:tag" content={c} />
        ))}
      </Head>
      <article className="py-16">
        <div className="c-small">
          <h1>{post.frontMatter?.title}</h1>
          {post.frontMatter?.excerpt ? <p className="text-grey-400 mt-1">{post.frontMatter.excerpt}</p> : null}
          <hr className="my-4 text-grey-800" />
          {post.frontMatter?.image && (
            <img src={post.frontMatter.image} alt={post.frontMatter.title} className="w-full" />
          )}
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
  // @ts-ignore
  const post = await getMdxNode<Post>("post", context, { mdxOptions: { rehypePlugins: [rehypeHighlight] } });

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
