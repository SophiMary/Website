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
import logo from "./images/logo.png";

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
    selectedItems: {
        color: "#262A94",
        fontWeight: "600",
        fontSize: "20px",
        marginRight: "40px",
        textTransform: "none",
        whiteSpace: "nowrap",
        borderBottom: "2px solid #262A94",
        borderRadius: "0",
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
    const [ homeSelected, setHomeSelected ] = React.useState(false)
    const [ productSelected, setProductSelected ] = React.useState(false)
    const [ personsSelected, setPersonsSelected ] = React.useState(false)
    const [ blogSelected, setBlogSelected ] = React.useState(false)
    const [ meetSelected, setMeetSelected ] = React.useState(false)

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
            pageURL: "/Website/"
        },
        {
            menuTitle: "Product",
            pageURL: "/Website/product"
        },
        {
            menuTitle: "Personas",
            pageURL: "/Website/personas"
        },
        {
            menuTitle: "Blog",
            pageURL: "/Website/blog"
        },
        {
            menuTitle: "Meet The Zipsters",
            pageURL: "/Website/meet-the-zipsters"
        },
        {
            menuTitle: "Request A Demo",
            pageURL: "/Website/request-a-Demo"
        },

    ];

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" className={classes.title}>
                        <img className={classes.brandLogo} src={logo} alt="logo" onClick={() => handleButtonClick("/Website/")} />
                    </Typography>
                    {/* Menu Bar */}
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
                        // Nav Bar
                            <div className={classes.headerOptions}>
                                <Button
                                    className={homeSelected ? classes.selectedItems : classes.navItems}
                                    onClick={() => { handleButtonClick("/Website/"); setHomeSelected(true); setProductSelected(false); setPersonsSelected(false); setBlogSelected(false); setMeetSelected(false)}}
                                >
                                    Home
                                </Button>
                                <Button
                                    className={productSelected ? classes.selectedItems : classes.navItems}
                                    onClick={() => {handleButtonClick("/Website/product"); setHomeSelected(false); setProductSelected(true); setPersonsSelected(false); setBlogSelected(false); setMeetSelected(false)}}
                                >
                                    Product
                                </Button>
                                <Button
                                    className={personsSelected ? classes.selectedItems : classes.navItems}
                                    onClick={() => {handleButtonClick("/Website/personas"); setHomeSelected(false); setProductSelected(false); setPersonsSelected(true); setBlogSelected(false); setMeetSelected(false)}}
                                >
                                    Personas
                                </Button>
                                <Button
                                    className={blogSelected ? classes.selectedItems : classes.navItems}
                                    onClick={() => {handleButtonClick("/Website/blog"); setHomeSelected(false); setProductSelected(false); setPersonsSelected(false); setBlogSelected(true); setMeetSelected(false)}}
                                >
                                    Blog
                                </Button>
                                <Button
                                    className={meetSelected ? classes.selectedItems : classes.navItems}
                                    onClick={() => {handleButtonClick("/Website/meet-the-zipsters"); setHomeSelected(false); setProductSelected(false); setPersonsSelected(false); setBlogSelected(false); setMeetSelected(true)}}
                                >
                                    Meet The Zipsters
                                </Button>
                                <Button
                                    className={classes.lastNavItems}
                                    onClick={() => handleButtonClick("/Website/request-a-Demo")}
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
