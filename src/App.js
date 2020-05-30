import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreatePost from "./components/create-post.component";
import EditPost from "./components/edit-post.component";
import PostList from "./components/post-list.component";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Landing />
          <Route path="/" exact component={PostList} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/create" component={CreatePost} />
        </div>
      </Router>
    );
  }
}

export default App;