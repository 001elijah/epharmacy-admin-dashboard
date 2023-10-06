import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";

import s from "./NavBar.module.scss";
import ModalPortal from "../ModalPortal/ModalPortal";
import { Logout } from "../../assets/icons/sprite";
import NavigationModule from "../NavigationModule/NavigationModule";

const NavBar = ({ setCurrentPageTitle, isMobileOrTablet }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebar]);
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className={s.burgerIcon}>
          <Link to="#" className={s.menuControls}>
            <AiIcons.AiOutlineMenu
              className={s.burgerIcon}
              onClick={toggleSidebar}
            />
          </Link>
        </div>

        <ModalPortal isModalOpen={sidebar} setIsModalOpen={setSidebar}>
          <nav className={sidebar ? clsx(s.sidebar, s.active) : s.sidebar}>
            <ul>
              <li className={s.navbarTop}>
                <Link to="#" className={s.menuControls}>
                  <AiIcons.AiOutlineClose
                    className={s.closeIcon}
                    onClick={toggleSidebar}
                  />
                </Link>
              </li>
              <NavigationModule
                toggleSidebar={toggleSidebar}
                setCurrentPageTitle={setCurrentPageTitle}
                isMobileOrTablet={isMobileOrTablet}
              />
              <li className={s.navLogout}>
                <Link to="#" className={s.menuControls} onClick={toggleSidebar}>
                  <Logout />
                </Link>
              </li>
            </ul>
          </nav>
        </ModalPortal>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
