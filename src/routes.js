import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import { BiBible } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { PiHandsPraying } from "react-icons/pi";
import { AiOutlineFolderAdd } from "react-icons/ai";


import Sermons from "views/admin/sermons";
import Blogs from "views/admin/blogs";
import Devotionals from "views/admin/devtionals";
import AddSermon from "views/admin/addSermon";
import AddBlog from "views/admin/addBlog";
import AddDevotional from "views/admin/addDevtional";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  {
    name: "Sermons",
    layout: "/admin",
    path: "sermons",
    icon: <BiBible className="h-6 w-6" />,
    component: <Sermons />,
    secondary: true,
  },
  {
    name: "Add Sermon",
    layout: "/admin",
    path: "addSermon",
    icon: <AiOutlineFolderAdd className="h-6 w-6" />,
    component: <AddSermon />,
  },

  {
    name: "Blogs",
    layout: "/admin",
    path: "blogs",
    icon: <FaBlog className="h-6 w-6" />,
    component: <Blogs />,
  },
  {
    name: "Add Blog",
    layout: "/admin",
    path: "addBlog",
    icon: <AiOutlineFolderAdd className="h-6 w-6" />,
    component: <AddBlog />,
  },
  {
    name: "Devotionals",
    layout: "/admin",
    path: "devtionals",
    icon: <PiHandsPraying className="h-6 w-6" />,
    component: <Devotionals />,
  },
  {
    name: "Add Devotional",
    layout: "/admin",
    path: "addDevotional",
    icon: <AiOutlineFolderAdd className="h-6 w-6" />,
    component: <AddDevotional />,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
