const MDX_COMPONENTS = {
  p: (props: any) => <p className="c-small text-xl my-4" {...props} />,
  img: (props: any) => <img className="my-4" alt={props.alt} {...props} />,
};

export default MDX_COMPONENTS;
