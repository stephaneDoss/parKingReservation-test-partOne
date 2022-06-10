/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import React from "react";

import { useRoutes } from "react-router-dom";
// import Invoice from './Invoice/Invoice';
// Icons
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { IModuleLink, Layout } from "./common/components/layouts";
import ExpenseModule from "./expense";
import InvoiceModule from "./invoice";
import AuthModule from "./auth";

const modulesLink: IModuleLink[] = [
  {
    icon: <AccountBalanceWalletIcon />,
    title: "Expense",
    isAdminModule: false,
    to: "/expenses",
  },
  {
    icon: <ReceiptIcon />,
    title: "Invoice",
    isAdminModule: false,
    to: "/invoices",
  },
  // {
  //   icon: <SettingsIcon />,
  //   title: 'Settings',
  //   to: '/setting',
  //   isAdminModule: false,
  //   navBottom: true,
  //   BottomProps: {
  //     order: 2
  //   }
  // },
  {
    icon: <ManageAccountsIcon />,
    title: "Users",
    isAdminModule: true,
    to: "/admin/users",
    BottomProps: {
      order: 1,
    },
  },
  {
    icon: <MoreHorizIcon />,
    isAdminModule: false,
    title: "More",
    BottomProps: {
      order: 3,
    },
  },
];

const AppRoutingModule: FC = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "expenses", element: <ExpenseModule /> }],
    },
    {
      path: "auth/*",
      element: <AuthModule />,
    },
  ]);
  return route;
};

export default AppRoutingModule;
