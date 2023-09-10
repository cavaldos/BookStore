import React, { ReactNode, Suspense, useMemo } from "react";

type PublicLayoutProps = {
  children: ReactNode;
};

const LoadingFallback = () => {
  return <div>Loading...</div>;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const HeaderLazy = useMemo(
    () => React.lazy(() => import("~/components/header/header")),
    []
  );
  const FooterLazy = useMemo(
    () => React.lazy(() => import("~/components/footer")),
    []
  );

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <HeaderLazy />
      </Suspense>

      <div
        style={{ backgroundColor: "grey" }}
        className="relative min-h-[calc(100vh_-_100px)] h-screen p-1"
      >
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <FooterLazy />
      </Suspense>
    </>
  );
};

export default PublicLayout;
