import React, { useMemo } from "react";
import styles from "./index.module.css";

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}

const AnchorHeader = ({ children, tag: Tag }: { children: string; tag: React.ElementType }) => {
  const anchor = useMemo(() => getAnchor(children), [children]);

  return (
    <Tag id={anchor} className={styles.header}>
      <a href={`#${anchor}`} className={styles.anchor}>
        #
      </a>
      {children}
    </Tag>
  );
};

export default AnchorHeader;
