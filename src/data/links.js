import { RiHomeHeartFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
// import { GrServices } from "react-icons/gr";
import { AiFillWechat } from "react-icons/ai";
import { GiLighthouse, GiLightningSpanner } from "react-icons/gi";
import { FaBlog, FaMediumM, FaStackOverflow } from "react-icons/fa";
import { FiTwitter, FiGithub, FiYoutube, FiLinkedin } from "react-icons/fi";

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

export const followLinks = [
  {
    icon: <FiTwitter />,
    label: "tw",
    url: "/",
  },
  {
    icon: <FiGithub />,
    label: "gh",
    url: "/about",
  },
  {
    icon: <FiYoutube />,
    label: "yt",
    url: "/services",
  },
  {
    icon: <FiLinkedin />,
    label: "li",
    url: "/projects",
  },
  {
    icon: <FaMediumM />,
    label: "md",
    url: "/blog",
  },
  {
    icon: <FaStackOverflow />,
    label: "st",
    url: "/contact",
  },
];
