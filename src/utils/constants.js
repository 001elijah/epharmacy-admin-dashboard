import {
  Cart,
  Dashboard,
  Flask,
  Pharmacy,
  Users,
} from "../assets/icons/sprite";

export const SIDEBAR_DATA = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Dashboard />,
    activeIcon: <Dashboard fill={"#59B17A"} />,
  },
  {
    title: "All orders",
    path: "/orders",
    icon: <Cart />,
    activeIcon: <Cart fill={"#59B17A"} />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <Flask />,
    activeIcon: <Flask fill={"#59B17A"} />,
  },
  {
    title: "Suppliers",
    path: "/suppliers",
    icon: <Pharmacy />,
    activeIcon: <Pharmacy fill={"#59B17A"} />,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <Users />,
    activeIcon: <Users fill={"#59B17A"} />,
  },
];

export const KEY_NAME_ESC = "Escape";
export const KEY_EVENT_TYPE = "keyup";
