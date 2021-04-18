import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./components/Fontawsomeicons";

import { FaBeer } from 'react-icons/fa';
import Header from "./components/Header";
import Navbar from "./components/Nav";
// import './css/bootstrap.rtl.min.css';
import ProfileSideRight from "./components/ProfileSideRight";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Support from "./components/Support.js";
import StoreManager from "./components/StoreManager";
import BackgroundTop from "./components/BackgrandTopPro";



class App extends React.Component {
  render() {
    return (
      <Router>

      <BackgroundTop />
      
      <Header />
      <BackgroundTop />

      <Navbar />

      <div className="row">
        <ProfileSideRight />
        <Switch>
          <Route path="/Dashboard" component={Dashboard}></Route>
          <Route path="/transaction" component={Support}></Route>
          <Route path="/factor" component={Support}></Route>
          <Route path="/ticketing" component={Support}></Route>
          <Route path="/shops" component={StoreManager}></Route>
          <Route path="/review" component={Support}></Route>
        



        </Switch>
      </div>

      <Footer />

      </Router>
    );
  }
}

export default App;
