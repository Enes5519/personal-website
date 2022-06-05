import type {PropsWithChildren} from "react";
import AnchorHeader from "@/components/AnchorHeader";

type Props = PropsWithChildren<any>;

const MDX_COMPONENTS = {
  p: (props: Props) => <p className="c-small my-4" {...props} />,
  h2: (props: Props) => <AnchorHeader tag="h2" {...props} />,
  h3: (props: Props) => <AnchorHeader tag="h3" {...props} />,
  pre: (props: Props) => <pre className="c-small my-4" {...props} />,
  blockquote: (props: Props) => <blockquote className="c-small my-8" {...props} />,
  img: (props: Props) => <img className="my-4" alt={props.alt} {...props} />,
  table: (props: Props) => <div className="c-small"><table className="my-8" cellPadding="0" cellSpacing="0" {...props} /></div>
};

export default MDX_COMPONENTS;
