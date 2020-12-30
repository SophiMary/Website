import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    productPage: {
        backgroundColor: "#fff",
        padding: "20px",
        marginTop: "30px",
        borderRadius: "40px",
        boxShadow: "24px 24px 26px 0px #BCC3DC"
    },
    tabImages: {
        width: "auto",
        padding: "10px",
        [theme.breakpoints.down("md")]: {
            width: "700px",
            padding: "5px",
        }, 
        [theme.breakpoints.down("xs")]: {
            width: "250px",
            padding: "5px",
        }, 
    },
}));

function ProductPages(props) {
    const classes = useStyles();
    return (
        <div className={classes.productPage}>
            <img className={classes.tabImages}src={props.image} alt="img" />
        </div>
    )
}

export default ProductPages
