import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { FC } from "react";
import { theme } from "./AppTheming";
import React from "react";

import "./App.css";
import { Route } from "react-router-dom";

import { Layout } from "./common/components/layouts";
import AppRoutingModule from "./AppRouting";

function App() {
  return (
    <div className="App">
      <AppRoutingModule />
    </div>
  );
}

export default App;
