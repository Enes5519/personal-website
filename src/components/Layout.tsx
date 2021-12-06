import React from "react";
import Header from "@/components/Header";

const Layout: React.FC = ({ children }) => (
  <div className="container">
    <Header />
    {children}
  </div>
);

export default Layout;
