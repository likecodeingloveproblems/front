import React, { Component } from "react";
import data from "../data.json";
import '../css/bootstrap.rtl.min.css';
import './Nav.css'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-section">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="add-shop-mobile" href="/profile/shop-manager/add/shop">
            حجره دار شوید
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav menu-navbar">
              <li className="nav-item">
                <a className="nav-link" href="/pages/static/order/">
                  نحوه ثبت سفارش
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages/static/questions/">
                  پرسش های متداول
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages/static/rules/">
                  شرایط و ضوابط
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages/static/aboutus/">
                  درباره ما
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages/connectus/">
                  تماس با ما
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages/complaint/">
                  ثبت شکایت
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav menu-navbar mr-auto add-shop"
              style={{marginlLeft: '0' }}
            >
              <li className="nav-item">
                <a className="nav-link" href="/profile/shop-manager/add/shop">
                  حجره دار شوید
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
