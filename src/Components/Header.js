import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import logo from "./logo.png";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    toolBar: {
        backgroundColor: "#fff",
        borderBottom: "2px solid #262A94"
    },
    brandLogo: {
        width: "30%",
        paddingTop: "10px",
        cursor: "pointer",
        [theme.breakpoints.down("lg")]: {
            width: "45%",
        },
        [theme.breakpoints.down("md")]: {
            width: "25%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "30%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "40%",
        },
    },
    menuItems: {
        color: "#262A94",
    },
    navItems: {
        color: "#262A94",
        fontWeight: "500",
        fontSize: "20px",
        marginRight: "40px",
        textTransform: "none",
        whiteSpace: "nowrap",
    },
    lastNavItems: {
        backgroundColor: "#9A60F2 !important",
        color: "#fff",
        fontSize: "15px",
        margin: "auto 100px",
        textTransform: "none",
        whiteSpace: "nowrap",
        padding: "5px 25px",
        borderRadius: "20px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "grey",
        "& .MuiSvgIcon-root": {
            fontSize: "32px",
        },
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        },
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly",
        "& .MuiButton-root:hover": {
            backgroundColor: "inherit",
            borderBottom: "2px solid currentColor",
        },
    },
}));

const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "Product",
            pageURL: "/product"
        },
        {
            menuTitle: "Personas",
            pageURL: "/personas"
        },
        {
            menuTitle: "Blog",
            pageURL: "/blog"
        },
        {
            menuTitle: "Meet The Zipsters",
            pageURL: "/meet-the-zipsters"
        },
        {
            menuTitle: "Request A Demo",
            pageURL: "/request-a-Demo"
        },

    ];

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" className={classes.title}>
                        <img className={classes.brandLogo} src={logo} alt="logo" onClick={() => handleButtonClick("/")} />
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem className={classes.menuItems} onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (
                            <div className={classes.headerOptions}>
                                <Button
                                    className={classes.navItems}
                                    onClick={() => handleButtonClick("/")}
                                >
                                    Home
                                </Button>
                                <Button
                                    className={classes.navItems}
                                    onClick={() => handleButtonClick("/product")}
                                >
                                    Product
                                </Button>
                                <Button
                                    className={classes.navItems}
                                    onClick={() => handleButtonClick("/personas")}
                                >
                                    Personas
                                </Button>
                                <Button
                                    className={classes.navItems}
                                    onClick={() => handleButtonClick("/blog")}
                                >
                                    Blog
                                </Button>
                                <Button
                                    className={classes.navItems}
                                    onClick={() => handleButtonClick("/meet-the-zipsters")}
                                >
                                    Meet The Zipsters
                                </Button>
                                <Button
                                    className={classes.lastNavItems}
                                    onClick={() => handleButtonClick("/request-a-Demo")}
                                >
                                    Request A Demo
                                </Button>
                            </div>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Header);
