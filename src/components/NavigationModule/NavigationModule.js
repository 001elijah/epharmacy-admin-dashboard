import React from "react";
import { SIDEBAR_DATA } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import s from "./NavigationModule.module.scss";

const NavigationModule = ({
  toggleSidebar,
  setCurrentPageTitle,
  isMobileOrTablet,
}) => {
  return (
    <>
      {SIDEBAR_DATA.map((item, index) => {
        return (
          <li key={index} className={s.navText}>
            <NavLink
              to={item.path}
              onClick={() => {
                isMobileOrTablet && toggleSidebar();
                setCurrentPageTitle(item.title);
              }}
            >
              {({ isActive }) => (isActive ? item.activeIcon : item.icon)}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavigationModule;
