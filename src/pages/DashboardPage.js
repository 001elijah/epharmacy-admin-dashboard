import React from "react";
import StatsList from "../components/StatsList/StatsList";
import { useMediaQuery } from "react-responsive";

const DashboardPage = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1279px)" });
  return (
    <div
      className={
        isMobileOrTablet ? "sectionContainer" : "dashboardDesktopContainer"
      }
    >
      <StatsList />
    </div>
  );
};

export default DashboardPage;
