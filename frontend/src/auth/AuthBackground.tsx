/* eslint-disable react/function-component-definition */
import { FC } from "react";
import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const AuthBackground: FC = () => (
  <div>
    {" "}
    <Outlet />
  </div>
);

export default AuthBackground;
