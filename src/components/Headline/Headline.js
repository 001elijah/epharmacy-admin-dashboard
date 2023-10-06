import React from "react";
import adminPanelLogo from "../../assets/images/adminPanelLogo.png";
import s from "./Headline.module.scss";
import clsx from "clsx";

const Headline = ({ currentPageTitle }) => {
  return (
    <div className={s.headlineFlexWrapper}>
      <img className={s.adminPanelLogo} src={adminPanelLogo} alt="logo" />
      <div>
        <h1 className={s.title}>Medicine store</h1>
        <div className={s.infoFlexWrapper}>
          <p className={clsx(s.info, s.border)}>{currentPageTitle}</p>
          <p className={s.info}>vendor@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
