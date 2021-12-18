const MDX_COMPONENTS = {
  p: (props: any) => <p className="c-small my-4" {...props} />,
  // eslint-disable-next-line jsx-a11y/heading-has-content
  h2: (props: any) => <h2 className="c-small my-8" {...props} />,
  // eslint-disable-next-line jsx-a11y/heading-has-content
  h3: (props: any) => <h3 className="c-small my-8" {...props} />,
  pre: (props: any) => <pre className="c-small my-4" {...props} />,
  blockquote: (props: any) => <blockquote className="c-small my-8" {...props} />,
  img: (props: any) => <img className="my-4" alt={props.alt} {...props} />,
};

export default MDX_COMPONENTS;
