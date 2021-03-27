import { RiHomeHeartFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
// import { GrServices } from "react-icons/gr";
import { AiFillWechat } from "react-icons/ai";
import { GiLighthouse, GiLightningSpanner } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";

export const navLinks = [
  {
    icon: <RiHomeHeartFill />,
    label: "home",
    url: "/",
  },
  {
    icon: <IoMdContacts />,
    label: "about",
    url: "/about",
  },
  {
    icon: <GiLightningSpanner />,
    label: "services",
    url: "/services",
  },
  {
    icon: <GiLighthouse />,
    label: "projects",
    url: "/projects",
  },
  {
    icon: <FaBlog />,
    label: "blog",
    url: "/blog",
  },
  {
    icon: <AiFillWechat />,
    label: "contact",
    url: "/contact",
  },
];

export const FOLLOW_LINKS = [
  {
    icon: "",
    name: "tw",
    url: "/",
  },
  {
    icon: "",
    name: "gh",
    url: "/about",
  },
  {
    icon: "",
    name: "yt",
    url: "/services",
  },
  {
    icon: "",
    name: "li",
    url: "/projects",
  },
  {
    icon: "",
    name: "md",
    url: "/blog",
  },
  {
    icon: "",
    name: "st",
    url: "/contact",
  },
];
