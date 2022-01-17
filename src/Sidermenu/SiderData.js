import React from "react";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MDIcons from "react-icons/md";
export const SiderbarData = [
  {
    tittle: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-item",
  },
  {
    tittle: "Movies",
    path: "/movies",
    icon: <MDIcons.MdLocalMovies />,
    cName: "side-item",
  },
  {
    tittle: "TvShows",
    path: "/tv",
    icon: <FaBIcons.FaCartPlus />,
    cName: "side-item",
  },

  {
    tittle: "Message",
    path: "/message",
    icon: <FaBIcons.FaEnvelopeOpenText />,
    cName: "side-item",
  },
  {
    tittle: "Team",
    path: "/team",
    icon: <AiIcons.AiOutlineTeam />,
    cName: "side-item",
  },
  {
    tittle: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "side-item",
  },
];
