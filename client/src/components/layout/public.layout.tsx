  import React, { ReactNode, Suspense, useMemo } from "react";
  import Header from "~/components/header/header";
  import LoadingFallback from "~/components/err/loader";

  type PublicLayoutProps = {
    children: ReactNode;
  };

  const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    const MemoizedHeader = useMemo(() => {
      return <Header />;
    }, []);

    const FooterLazy = useMemo(
      () => React.lazy(() => import("~/components/footer")),
      []
    );
    return (
      <>
        {MemoizedHeader}
        <div className="relative  min-h-screen bg-slate-500 mt-[82px]">
          {" "}
          {/*remove */}
          <Suspense fallback={<LoadingFallback />}>
            <div className="bg-pink-100 flex justify-center m-0  relative min-h-max">
              {children}
            </div>
            {/*remove */}
            <FooterLazy />
          </Suspense>
        </div>
      </>
    );
  };

  export default PublicLayout;
