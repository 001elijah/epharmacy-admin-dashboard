import React from "react";
import StatsList from "../components/StatsList/StatsList";
import { useMediaQuery } from "react-responsive";
import CustomizedTable from "../components/CustomizedTable/CustomizedTable";

const DashboardPage = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1279px)" });
  return (
    <div
      className={
        isMobileOrTablet ? "sectionContainer" : "dashboardDesktopContainer"
      }
    >
      <StatsList />
      <CustomizedTable />
    </div>
  );
};

export default DashboardPage;
