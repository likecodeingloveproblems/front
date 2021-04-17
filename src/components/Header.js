import React, { Component } from "react";
import data from "../data.json";
import "../css/bootstrap.rtl.min.css";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-12 logo-header">
            <a href="/">
              <img
                src={data.icons.logo}
                alt="لوگو"
                className="img-responsive"
              ></img>
            </a>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-6 col-sm-6 col-12 search-header">
            <ul className="menu-top">
              <li>
                <a className="active-text" href="https://nakhll.com/">
                  نخل شما
                </a>
              </li>

              <li>
                <a href="https://nakhll.com/markets">بازارچه&zwnj;ها</a>
              </li>
              <li>
                <a href="https://nakhll.com/shops/all/">حجره&zwnj;ها</a>
              </li>
              <li>
                <a href="https://nakhll.com/product/all/">محصولات</a>
              </li>
              <li>
                <a href="https://nakhll.com/profile/ticketing/">پشتیبانی</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12 icon-header">
            <div className="icon-top">
              <div className="user-top dropdown cls-avatar">
                <a
                  href="/profile/dashboard/"
                  className="dropdown-toggle"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={data.icons.userOnline} alt="ناحیه کاربری" />
                </a>
                <div className="dropdown-menu dropdown-primary sh-cart">
                  <a href="/profile/dashboard/">
                    <div className="profile-top">
                      <img
                        src="/media/CACHE/images/media/Pictures/Profile/Ws2foi/f46681569bc2e433208d0b89ab1b42b1.jpg"
                        className="profileimg"
                        alt="profileimg"
                      />
                      <span>خوش آمدید</span>
                      <h3>میلاد</h3>
                    </div>
                  </a>
                  <a className="wallet-filled" href="/profile/wallet/">
                    {" "}
                    <i className="fal fa-wallet"></i> کیف پول :{" "}
                    <span className="numbersprice">0</span> ریال{" "}
                  </a>
                  <div className="dropdown-listmenu">
                    <a className="dropdown-item" href="/profile/dashboard/">
                      <i className="fad fa-user"></i> پروفایل{" "}
                    </a>

                    <a className="dropdown-item" href="/profile/shops/">
                      <i className="fad fa-store-alt"></i> مدیریت حجره{" "}
                    </a>
                    <a className="dropdown-item" href="/accounts/logout/">
                      <i className="fad fa-sign-out-alt"></i> خروج
                    </a>
                  </div>
                </div>
              </div>
              <div className="cart-top dropdown">
                <a
                  className="dropdown-toggle"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/static/images/shopping-bag.svg" alt="سبد خرید" />
                </a>
                <div className="dropdown-menu dropdown-primary sh-cart cls-cart">
                  <span>تعداد کالا</span>
                  <span className="shopBagProductCount"></span>
                  <a href="/cart/detail/" className="ainsh">
                    مشاهده سبد&zwnj;خرید
                  </a>
                  <br />
                  <p>
                    مبلغ :{" "}
                    <span id="totalPrice" className="numbersprice">
                      {" "}
                      0{" "}
                    </span>
                    ریال
                  </p>
                  <p>
                    <a href="/cart/detail/" className="savecart">
                      <i className="far fa-cart-plus"></i> ثبت سفارش{" "}
                    </a>
                  </p>
                  <div className="hr-line-in-shop-bag"></div>
                  <div id="loaderDiv" className="loaderDivclass">
                    در حال بارگذاری
                    <img
                      src="/static/images/loading.svg"
                      alt="در حال بارگذاری"
                    />
                  </div>
                  <div className="shop-bag-products-empty">
                    <p>محصولی در سبد خرید شما وجود ندارد!</p>
                  </div>
                  <div className="shop-bag-products"></div>
                  <p className="shop-bag-more-products-p">
                    <a href="/cart/detail/" className="shop-bag-more-products">
                      {" "}
                      بیشتر...{" "}
                    </a>
                  </p>
                </div>
                <div className="shop-bag-count"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
