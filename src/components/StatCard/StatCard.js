import React from "react";
import s from "./StatCard.module.scss";

const StatCard = ({ title, amount, children }) => {
  return (
    <div className={s.cardWrapper}>
      <div className={s.alignIconAndCaption}>{children} <span className={s.greyCaption}>{title}</span></div>{" "}
      <span className={s.boldCaption}>{amount}</span>
    </div>
  );
};

export default StatCard;
