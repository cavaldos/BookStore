import React, { Suspense } from "react";

const NotFoundComponent = React.lazy(() => import("./notfound"));
const NotFoundPage: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NotFoundComponent />
  </Suspense>
);

export default NotFoundPage;
