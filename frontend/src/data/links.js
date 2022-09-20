import React from "react";
import { IoMdHome } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { MdSubject } from "react-icons/md";
import { BsPencilFill, BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GiMountainCave } from "react-icons/gi";
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { GiMedicalPackAlt } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';
import { FaMoneyBillWave } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi'


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


export const topics = [
  {
    title: "travel",
    icon: <GiMountainCave />,
  },

  {
    title: "business",
    icon: <MdOutlineBusinessCenter />,
  },

  {
    title: "medicine",
    icon: <GiMedicalPackAlt />,
  },

  {
    title: "lifestyle",
    icon: <CgGym /> ,
  },

  {
    title: "finance",
    icon: <FaMoneyBillWave />,
  },

  {
    title: "fashion",
    icon: <GiClothes />,
  },
];