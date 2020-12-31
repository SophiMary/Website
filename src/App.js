import React from "react";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/Website/" component={() => (<Home info="Home" />)} />
        <Route exact path="/Website/product/creator" component={Product} />
        <Route exact path="/Website/personas" component={() => (<Home info="Persons" />)} />
        <Route exact path="/Website/blog" component={() => (<Home info="Blog" />)} />
        <Route exact path="/Website/meet-the-zipsters" component={() => (<Home info="Meet The Zipsters" />)} />
        <Route exact path="/Website/request-a-Demo" component={() => (<Home info="Request A Demo" />)} />
      </Switch>
    </div>
  );
}
