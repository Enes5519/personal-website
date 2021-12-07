import { MdxNode } from "next-mdx/server";

type Category = MdxNode<{
  name: string;
}>;

interface Post
  extends MdxNode<{
    title: string;
    excerpt?: string;
    category?: string[];
    image?: string;
    date?: Date;
  }> {
  relationships?: {
    category: Category[];
  };
}
