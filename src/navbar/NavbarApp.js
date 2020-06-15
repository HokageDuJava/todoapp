import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import TodoApp from "../todo/TodoApp";
import Post from "./Post";
import Login from "./Login";

class NavbarApp extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={TodoApp} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavbarApp;
