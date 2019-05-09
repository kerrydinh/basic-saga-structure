import React from "react";
import Home from "./containers/HomePage";
import Form from "./containers/FormTest";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { useTranslation  } from 'react-i18next';
const Routing = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <BrowserRouter>
      <div style={{ border: "1px solid #ccc" }}>
        <Link className="nav-link" style={{ marginLeft: "20px" }} to="/">
          Home
        </Link>
        <Link className="nav-link" style={{ marginLeft: "20px" }} to="/form">
          Form
        </Link>
        <Link className="nav-link" style={{ marginLeft: "20px" }} to="/user">
          User
        </Link>
      </div>
      <div>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;