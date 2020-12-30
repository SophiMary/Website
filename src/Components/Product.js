import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import productBG from "./images/Background.png";
import creatorBG from "./images/CreatorBackground.png";
import playerBG from "./images/PlayerBackground.png"
import dashboardBG from "./images/DashboardBackground.png"
import creatorImg from "./images/CreatorGraphic.png"
import playerImg from "./images/PlayerGraphic.png"
import dashboardImg from "./images/DashboardGraphic.png"
import ProductPages from "./ProductPages";

const useStyles = makeStyles(theme => ({
    product: {
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image1: {
        background: `url(${creatorBG}), url(${productBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "97% 90%, 60% 244%",
    },
    image2: {
        background: `url(${playerBG}), url(${productBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "97% 90%, 60% 244%",
    },
    image3: {
        background: `url(${dashboardBG}), url(${productBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "97% 90%, 60% 244%",
    },
    content: {
        color: "#262A94",
        fontWeight: "600",
        fontSize: "35px",
        marginTop: "120px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
            marginTop: "20px",
        },
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        boxShadow: "none",
        background: "transparent",
    },
    productSection: {
        color: "#262A94",
        fontSize: "28px",
        fontWeight: "normal",
        marginTop: "40px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "10px",
            fontSize: "15px",
        },
        "& a:-webkit-any-link": {
            textDecoration: "none",
            color: "#272A93",
        },
    },
    selectedProductSection: {
        olor: "#262A94",
        fontSize: "28px",
        fontWeight: "600",
        marginTop: "40px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "10px",
            fontSize: "15px",
        },
        "& a:-webkit-any-link": {
            color: "#272A93",
        },
    },
    productBar: {
        [theme.breakpoints.down("sm")]: {
            marginTop: "10px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    }
}));

function Product() {
    const [selected, setSelected] = React.useState(true);
    const [secondSelected, setSecondSelected] = React.useState(false);
    const [creatorSelected, setCreatorSelected] = React.useState(false);
    const [playerSelected, setPlayerSelected] = React.useState(false);
    const [dashboardSelected, setDashboardSelected] = React.useState(false);
    const classes = useStyles();

    return (
        <>
            <div className={selected ? classes.image1 : (secondSelected ? classes.image2 : classes.image3)}>
                <div className={classes.product}>
                    <div className={classes.content}>
                        Explore Ziplyne's Core Features
                </div>
                    <div className={classes.root}>
                        <BrowserRouter>
                            <Grid container className={classes.productBar} spacing={3}>
                                <Grid item className={classes.tab} md={4}>
                                    <Paper className={classes.paper}>
                                        <Typography className={creatorSelected ? classes.selectedProductSection : classes.productSection}>
                                            <Link to="/product/creator" onClick={() => { setSelected(true); setCreatorSelected(true); setPlayerSelected(false); setDashboardSelected(false) }}>Creator</Link>
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item className={classes.tab} md={4}>
                                    <Paper className={classes.paper}>
                                        <Typography className={playerSelected ? classes.selectedProductSection : classes.productSection}>
                                            <Link to="/product/player" onClick={() => { setSelected(false); setSecondSelected(true); setCreatorSelected(false); setPlayerSelected(true); setDashboardSelected(false) }}>Player</Link>
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item className={classes.tab} md={4}>
                                    <Paper className={classes.paper}>
                                        <Typography className={dashboardSelected ? classes.selectedProductSection : classes.productSection}>
                                            <Link to="/product/dashboard" onClick={() => { setSelected(false); setSecondSelected(false); setCreatorSelected(false); setPlayerSelected(false); setDashboardSelected(true) }}>Dashboard</Link>
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <div>
                                <Route path="/product/creator" exact component={() => (<ProductPages image={creatorImg} />)} />
                                <Route path="/product/player" exact component={() => (<ProductPages image={playerImg} />)} />
                                <Route path="/product/dashboard" exact component={() => (<ProductPages image={dashboardImg} />)} />
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product