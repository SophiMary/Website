import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    productPage: {
        backgroundColor: "#fff",
        padding: "10px",
        marginTop: "30px",
        borderRadius: "40px",
        boxShadow: "3px 4px 25px 2px #BCC3DC"
    },
    tabImages: {
        width: "auto",
        [theme.breakpoints.down("md")]: {
            width: "700px",
            padding: "5px",
        }, 
        [theme.breakpoints.down("xs")]: {
            width: "250px",
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
