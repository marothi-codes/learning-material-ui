import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import SideMenu from "../components/SideMenu";

import Header from "../components/Header";
import "./App.css";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
