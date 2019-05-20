import React from "react";
import Home from "./containers/HomePage";
import Form from "./containers/FormTest";
import CleaningObject from "./containers/CleaningObject";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import SideBar from './components/SideBar';
import Navigation from './components/Navigation';
import Wrapper from './components/Wrapper';
import Container from './components/Container';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

const Routing = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const items = [
    {
      name: "Notification",
      icon: faHome,
      router: '/admin'
    },
    {
      name: "Operations",
      icon: faBell,
      router: '/operations'
    },
    {
      name: "Favorite Customers",
      icon: faSync,
      router: '/favorite'
    },
    {
      name: "Customers",
      icon: faBuilding,
      elements: [
        {
          name: "Cleaning Object",
          router: '/cleaning-object'
        },
        {
          name: "Room Book",
          router: '/room-book'
        },
        {
          name: "Cleaning Territory",
          router: '/territory'
        },
        {
          name: "Service Specifications",
          router: '/service'
        }
      ]
    },
    {
      name: "Staff",
      icon: faUser,
      router: '/staff'
    },
    {
      name: "Assets",
      icon: faCubes,
      router: '/assets'
    },
    {
      name: "Services",
      icon: faServer,
      router: '/services'
    },
    {
      name: "Setting",
      icon: faCogs,
      router: '/setting'
    }
  ];

  return (
    <BrowserRouter>
      <Navigation>
      </Navigation>
      <Wrapper>
        <SideBar items={items}></SideBar>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/cleaning-object" component={CleaningObject} />
            <Route exact path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Routing;