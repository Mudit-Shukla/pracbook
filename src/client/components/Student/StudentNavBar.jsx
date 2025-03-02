import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardList from "../Faculty/CardList";
import {Typography} from "@mui/material";

const useStyle = makeStyles((theme) => ({
  years: {
    margin: "10px",
  },
  cardBody: {
    boxShadow: "none !important",
    position: "fixed",
    width: "100%",
  },
  profileSection: {
    position: "absolute",
    right: "20px",
    top: "16px",
  },
  header: {
    padding: theme.spacing(1),
    position: "relative",
    width: "100%",
    // zIndex: "4 !important",
  },
  head: {
    height: "20px !important",
    width: "100%",
    marginLeft: "20px",
    marginBottom: "20px",
  },
}));

const Navbar = () => {
  const classes = useStyle();

  return <React.Fragment></React.Fragment>;
};
function DashBoard() {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Card className={classes.cardBody}>
        <CardList />
      </Card>
    </React.Fragment>
  );
}
export default DashBoard;
export { Navbar };
