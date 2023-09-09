import React, { ReactNode } from "react";

type PrivateLayoutProps = {
  children: ReactNode;
};

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <>
      <h1>Private</h1>
      <div>{children}</div>
    </>
  );
};

export default PrivateLayout;
