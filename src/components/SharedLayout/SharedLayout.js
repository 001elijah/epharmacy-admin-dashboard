import React, { Suspense, useState } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import NavigationModule from "../NavigationModule/NavigationModule";
import { useMediaQuery } from "react-responsive";
import s from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const [currentPageTitle, setCurrentPageTitle] = useState("Dashboard");
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1279px)" });
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header
          currentPageTitle={currentPageTitle}
          setCurrentPageTitle={setCurrentPageTitle}
          isMobileOrTablet={isMobileOrTablet}
        />
        <div className={s.flexWrapper}>
          {!isMobileOrTablet && (
            <ul className={s.borderRight}>
              <NavigationModule
                setCurrentPageTitle={setCurrentPageTitle}
                isMobileOrTablet={isMobileOrTablet}
              />
            </ul>
          )}
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default SharedLayout;
