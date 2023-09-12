import Loading from "~/components/err/loader";

import React, { Suspense, useMemo } from "react";
const Slider: React.FC = () => {
  const CarouselLazy = useMemo(
    () => React.lazy(() => import("~/components/container/carousel")),
    []
  );
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CarouselLazy />
      </Suspense>
    </>
  );
};
export default Slider;
