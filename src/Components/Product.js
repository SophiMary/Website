import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import productBG from "./Background.png";
import productDownBG from "./CreatorBackground.png";

const useStyles = makeStyles(theme => ({
    product: {
        background: `url(${productBG}), url(${productDownBG})`,
        backgroundPosition: "50% -350%, 36% 190%",
        height: "95vh",
        padding: "15px",
        [theme.breakpoints.down("md")]: {
            backgroundPosition: "50% -330%, 34% 183%",
        },
        [theme.breakpoints.down("sm")]: {
            backgroundPosition: "20% -63%, 21% 221%",
        },
    },
}));

function Product() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.product}>
                Hi
        </div>
        </>
    )
}

export default Product
