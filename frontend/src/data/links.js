import React from "react";
import { IoMdHome } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { MdSubject } from "react-icons/md";
import { BsPencilFill, BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import math from '../files/images/Math.jpg'

export const Links = [
  {
    title: "Settings",
    links: [
      {
        name: "profile",
        icon: <CgProfile />,
      },

      {
        name: "account settings",
        icon: <FiSettings />,
      },
    ],
  },

  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <IoMdHome />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "categories",
        icon: <BiCategoryAlt />,
      },

      {
        name: "subjects",
        icon: <MdSubject />,
      },

      {
        name: "writers",
        icon: <BsPencilFill />,
      },

      {
        name: "examples",
        icon: <BsFileEarmarkSpreadsheetFill />,
      },
    ],
  },
];

export const Subjects = [
  {
    name: "math",
  },

  {
    name: "english",
  },

  {
    name: "history",
  },

  {
    name: "geography",
  },

  {
    name: "chemistry",
  },

  {
    name: "biology",
  },
];
