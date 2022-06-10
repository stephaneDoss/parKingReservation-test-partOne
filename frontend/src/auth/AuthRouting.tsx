/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import React from "react";

import { useRoutes } from "react-router-dom";
import AuthBackground from "./AuthBackground";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const AuthRoutingModule: FC = () => {
  const route = useRoutes([
    {
      element: <AuthBackground />,
      children: [
        {
          index: true,
          // path: '/',
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ]);
  return route;
};
