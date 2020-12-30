import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import productBG from "./images/Background.png";
import "./Home.css";

const useStyles = makeStyles(theme => ({
  page: {
    background: `url(${productBG})`,
    height: "95vh",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "50% -330%, 34% 183%",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "20% -63%, 21% 221%",
    },
  },
}));

const Home = props => {
  const classes = useStyles();


  return (
    <div className={classes.page}>{props.info} Page</div>
  );
};

export default Home;
