import React from "react";
import NavBar from "../NavBar/NavBar";
import Headline from "../Headline/Headline";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Logout } from "../../assets/icons/sprite";

const Header = ({
  currentPageTitle,
  setCurrentPageTitle,
  isMobileOrTablet,
}) => {
  return (
    <header className={s.header}>
      <div className="sectionContainer">
        <div className={s.headerFlexWrapper}>
          {isMobileOrTablet && (
            <NavBar
              setCurrentPageTitle={setCurrentPageTitle}
              isMobileOrTablet={isMobileOrTablet}
            />
          )}
          <Headline currentPageTitle={currentPageTitle} />
          {!isMobileOrTablet && (
            <div className={s.navLogout}>
              <Link to="#" className={s.menuControls}>
                <Logout />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
