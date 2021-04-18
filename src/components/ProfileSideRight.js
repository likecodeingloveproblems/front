
import React, { Component } from "react";
import './ProfileSideRight.css';
import { FiLock ,FiLogOut} from  "react-icons/fi";
import {ImBell} from "react-icons/im";
import {BsClipboardData} from "react-icons/bs";
import {RiUserHeartFill} from  "react-icons/ri";
import {FaFileInvoiceDollar,FaIdBadge} from "react-icons/fa";
import {AiOutlineComment,AiOutlineShop} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import data from "../data.json";

class ProfileSideRight extends React.Component {
  render() {
    return (
      <div className="col-xl-3">
        <div className="profile-sidebar-site">
          <div className="profile-sidebar">
            <img
              src=""
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
                <i > <FiLogOut/></i>
              </div>
            </a>
            <a href="/profile/message/">
              <div>
                <div className="new-message-count"></div>
                <i ><ImBell/></i>
              </div>
            </a>
            <a href="/accounts/forget-password-mobile/">
              <div>
                <i ><FiLock/></i>
              </div>
            </a>
          </div>
        </div>
        <div className="profile-sidebar-main">
          <a href="/profile/dashboard/">
            <button className="activebtn">
              <i > <FaIdBadge/></i>
              
              
              <h5>داشبورد</h5>

              
            </button>
          </a>
          <a href="/profile/transaction/">
            <button>
              <i ><BsClipboardData/></i>
              <h5>تراکنش ها</h5>
            </button>
          </a>
          <a href="/profile/factor/">
            <button>
              <i ><FaFileInvoiceDollar/></i>
              <h5>صورت حساب ها</h5>
            </button>
          </a>
          <a href="/profile/ticketing/">
            <button>
              <i ><RiUserHeartFill/></i>
              <h5>پشتیبانی</h5>
            </button>
          </a>
          <a href="/profile/shops/">
            <button>
              <i ><AiOutlineShop/></i>
              <h5>مدیریت حجره</h5>
            </button>
          </a>
          <a href="/profile/review/">
            <button>
              <i ><AiOutlineComment/></i>
              <h5>نقد ها و نظرات</h5>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileSideRight;
