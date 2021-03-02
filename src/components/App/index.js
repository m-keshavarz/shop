import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import "pace-js";
import "pace-js/themes/blue/pace-theme-minimal.css";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./fontiran.css";
import "./app.scss";

import history from "../../config/history";
import routes from "../../config/routes";

import { Provider } from "react-redux";
import store from "../../store";

import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Navbar />
          <Content>
            <Switch>
              {routes.map((route) => (
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer />

          <ToastContainer
            position="top-left"
            autoClose={3500}
            closeOnClick
            pauseOnHover
            draggable
            rtl
          />
        </Router>
      </Provider>
    );
  }
}

export default App;
