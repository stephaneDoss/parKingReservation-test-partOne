/* eslint-disable no-console */
import { FC, useEffect } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "./data";

// console.log(getUserTest, {
//   id: 'aad34d25-7d4c-46f0-b534-27cf65af333b'
// });

const Invoices: FC = () => {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  return <div style={{ display: "flex" }}>test</div>;
};

export default Invoices;
