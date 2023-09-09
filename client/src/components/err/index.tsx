import React, { Suspense } from "react";

const NotFoundPage: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div>Not Found</div>
  </Suspense>
);

export default NotFoundPage;
