import React, { ReactNode } from "react";

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
      <>
          <h1>Public Layout</h1>
      <div>{children}</div>
    </>
  );
};

export default PublicLayout;
