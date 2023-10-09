import React from 'react'
import StatCard from '../StatCard/StatCard'
import { MoneyStack, UsersOutlined } from '../../assets/icons/sprite';
import s from "./StatsList.module.scss";

const StatsList = () => {
  return (
      <ul className={s.cardsWrapper}>
      <li>
        <StatCard title={"All products"} amount={"8430"}>
          <MoneyStack />
        </StatCard>
      </li>
      <li>
        <StatCard title={"All suppliers"} amount={"211"}>
          <UsersOutlined />
        </StatCard>
      </li>
      <li>
        <StatCard title={"All customers"} amount={"140"}>
          <UsersOutlined />
        </StatCard>
      </li>
    </ul>
  );
}

export default StatsList