import {
  dashboard,
  logout,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/home",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    disabled: false,
  },
];
