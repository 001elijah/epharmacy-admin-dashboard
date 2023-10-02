import React, { Suspense } from "react";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <>
      <div>SharedLayout</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
