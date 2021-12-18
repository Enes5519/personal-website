import AnchorHeader from "@/components/AnchorHeader";

const MDX_COMPONENTS = {
  p: (props: any) => <p className="c-small my-4" {...props} />,
  h2: (props: any) => <AnchorHeader tag="h2" {...props} />,
  h3: (props: any) => <AnchorHeader tag="h3" {...props} />,
  pre: (props: any) => <pre className="c-small my-4" {...props} />,
  blockquote: (props: any) => <blockquote className="c-small my-8" {...props} />,
  img: (props: any) => <img className="my-4" alt={props.alt} {...props} />,
};

export default MDX_COMPONENTS;
