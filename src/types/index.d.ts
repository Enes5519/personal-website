import { MdxNode } from "next-mdx/server";

type Category = MdxNode<{
  name: string;
}>;

interface Post
  extends MdxNode<{
    title: string;
    excerpt?: string;
    category?: string[];
  }> {
  relationships?: {
    category: Category[];
  };
}
