import React, { Component } from "react";
import './ProfileSideRight.css';
class ProfileSideRight extends React.Component {
  render() {
    return (
      <div className="col-xl-3">
        <div className="profile-sidebar-site">
          <div className="profile-sidebar">
            <img
              src="/media/CACHE/images/media/Pictures/Profile/Ws2foi/f46681569bc2e433208d0b89ab1b42b1.jpg"
              alt="profile-img"
            />
            <h4>میلاد حسنی</h4>
            <a href="/profile/wallet/">
              <h5>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/shopping-and-ecommerce-1/38/Shopping_icons_1_Converted-09-512.png"
                  alt="."
                />
                کیف پول :
                <span className="priceline">
                  <span className="numbersprice">0</span>
                </span>
                ریال
              </h5>
            </a>
          </div>
          <div className="profile-sidebar-icon">
            <a href="/accounts/logout/">
              <div>
                <i className="fal fa-sign-out"></i>
              </div>
            </a>
            <a href="/profile/message/">
              <div>
                <div className="new-message-count"></div>
                <i className="far fa-bell"></i>
              </div>
            </a>
            <a href="/accounts/forget-password-mobile/">
              <div>
                <i className="fal fa-lock"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="profile-sidebar-main">
          <a href="/profile/dashboard/">
            <button className="activebtn">
              <i className="fas fa-id-badge"></i>
              <h5>داشبورد</h5>
            </button>
          </a>
          <a href="/profile/transaction/">
            <button>
              <i className="fad fa-clipboard-list"></i>
              <h5>تراکنش ها</h5>
            </button>
          </a>
          <a href="/profile/factor/">
            <button>
              <i className="fas fa-file-invoice-dollar"></i>
              <h5>صورت حساب ها</h5>
            </button>
          </a>
          <a href="/profile/ticketing/">
            <button>
              <i className="fad fa-user-headset"></i>
              <h5>پشتیبانی</h5>
            </button>
          </a>
          <a href="/profile/shops/">
            <button>
              <i className="fas fa-store"></i>
              <h5>مدیریت حجره</h5>
            </button>
          </a>
          <a href="/profile/review/">
            <button>
              <i className="fad fa-comments-alt"></i>
              <h5>نقد ها و نظرات</h5>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileSideRight;
