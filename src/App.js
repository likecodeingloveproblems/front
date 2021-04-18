import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDom from "react-dom";
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
    return [
      

      <BackgroundTop />,
      
      <Header />,
      <BackgroundTop />,

      <Navbar />,

      <div className="row">
        <ProfileSideRight />
        <StoreManager />
      </div>,

      <Footer />,
    ];
  }
}

export default App;
