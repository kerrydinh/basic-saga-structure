import React, { Component } from 'react';
import Home from './containers/HomePage';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ border: "1px solid #ccc"}}>
                    <Link className="nav-link" style={{ marginLeft: "20px" }} to="/">Home</Link>
                    <Link className="nav-link" style={{ marginLeft: "20px" }} to="/product">Product</Link>
                    <Link className="nav-link" style={{ marginLeft: "20px" }} to="/user">User</Link>
                </div>


                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="*" render={() => (<Redirect to="/" />)} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;