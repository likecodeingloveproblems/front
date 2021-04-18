import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Nav";
// import './css/bootstrap.rtl.min.css';
import ProfileSideRight from "./components/ProfileSideRight";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Support from "./components/Support.js";
import StoreManager from "./components/StoreManager"

class App extends React.Component {
  render() {
    return [
      <Header />,

      <Navbar />,
      <div className="row">
        <ProfileSideRight />
        <StoreManager/>
      </div>,

      <Footer />,
    ];
  }
}

export default App;
