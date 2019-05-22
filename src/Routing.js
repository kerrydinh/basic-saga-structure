import React, { Component, useEffect  } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { withAuthentication } from './utils/auth';
import { connect } from "react-redux";

/*Page*/
import Home from "./containers/HomePage";
import Form from "./containers/FormTest";
import CleaningObject from "./containers/CleaningObject";
import CallbackPage from './containers/Callback';

/* UI Components */
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

import { getUserInfo } from "./containers/Callback/state/selector";

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
class Routing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
          <Navigation
            onSignIn={ () => this.props.auth.onSignIn() }
            userInfo={ this.props.userInfo }
          >
          </Navigation>
          <Wrapper>
            <SideBar items={items}></SideBar>
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/cleaning-object" component={CleaningObject} />
                <Route path="/callback" component={CallbackPage}  />
                <Route exact path="*" render={() => <Redirect to="/" />} />
              </Switch>
            </Container>
          </Wrapper>
      </BrowserRouter>
    );
  }
}
 
const mapStatetoProps = state => {
  const userInfo = getUserInfo(state);
  return {
    userInfo: userInfo
  };
};

export default connect(
  mapStatetoProps,
  null
)(withAuthentication(Routing));
