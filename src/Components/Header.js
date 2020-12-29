import React from "react";
import {
    Paper,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    MenuItem,
    Menu
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        "& .MuiAppBar-colorPrimary": {
            backgroundColor: "#fff",
            color: "#7F7F7F"
        },
    },
    toolBar: {
        paddingTop: "5px",
        borderBottom: "2px solid #2E3291",
    },
    paper: {
        color: "#2E3291",
        boxShadow: "none",
        marginRight: "50px",
        fontWeight: "600",
        fontSize: "20px",
        whiteSpace: "nowrap",
    },
    lastNavItem: {
        color: "#fff",
        backgroundColor: "#671ADB",
        padding: "10px 15px",
        borderRadius: "20px",
        boxShadow: "none",
        margin: "auto 80px",
        fontWeight: "400",
        fontSize: "15px",
        whiteSpace: "nowrap",
    },
    title: {
        display: "block"
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
            alignItems: "center",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        },
        "& .MuiSvgIcon-root": {
            fontSize: "35px",
        },
    },
    brandLogo: {
        width: "10%",
        [theme.breakpoints.down('lg')]: {
            width: "20%",
        },
        [theme.breakpoints.down('md')]: {
            width: "30%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "28%",
        },
    },
}));

export default function Demo() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        ></Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Paper>Hi</Paper>
            </MenuItem>
            <MenuItem>
                <Paper>Hi</Paper>
            </MenuItem>
            <MenuItem>
                <Paper>Hi</Paper>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar className={classes.toolBar}>
                        <div>
                            <Typography className={classes.title} variant="h6" noWrap>
                                <img className={classes.brandLogo} src={logo} alt="logo" />
                            </Typography>
                        </div>
                        {/* <div className={classes.grow} /> */}
                        <div className={classes.sectionDesktop}>
                            <Paper className={classes.paper}>Home</Paper>
                            <Paper className={classes.paper}>Product</Paper>
                            <Paper className={classes.paper}>Peronas</Paper>
                            <Paper className={classes.paper}>Blog</Paper>
                            <Paper className={classes.paper}>Meet The Zipsters</Paper>
                            <Paper className={classes.lastNavItem}>Meet The Zipsters</Paper>
                        </div>

                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        </>
    );
}
