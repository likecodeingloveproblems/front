import React, { Component } from "react";
import "./Support.css"

class Support extends React.Component {
  render() {
    return (
      <div className="col-xl-9 col-lg-9 col-md-9 col-xs-9 col-9">
        <div className="profile-box">
          <div className="row">
            <div className="col-lg-3">
              <div className="list-support">
                <ul>
                  <span>
                    <li className="activelistsupport">
                      فنی <span className="">0</span>
                    </li>
                  </span>
                  <span>
                    <li>
                      مالی <span className="">0</span>
                    </li>
                  </span>
                  <span>
                    <li>
                      پشتیبانی <span className="">0</span>
                    </li>
                  </span>
                </ul>
              </div>

              <div className="status-support">
                <h6> وضعیت : </h6>

                <ul>
                  <li>
                    <i className="fas fa-circle dontread-point"></i> خوانده نشده
                  </li>
                  <li>
                    <i className="fas fa-circle read-point"></i> در حال بررسی
                  </li>
                  <li>
                    <i className="fas fa-circle response-point"></i> بررسی شده
                  </li>
                  <li>
                    <i className="fas fa-circle close-point"></i> بسته شده
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-list-ticket"></div>

            <div className="col-lg-5">
              <div className="form-ticket">
                <h5>درخواست جدید</h5>

                <form
                  method="POST"
                  enctype="multipart/form-data"
                  action="addticket/"
                >
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="kw20Ag0lWxTWVB91EOIj1gBtZoELrYqGiWmYMp0UHOA5oPytBtm8udEb4EhnLlEe"
                  ></input>
                  <div className="form-group row">
                    <label for="inputTitle" className="col-sm-2 col-form-label">
                      عنوان
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        name="Ticket_Title"
                        className="form-control"
                        id="inputTitle"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <label
                        for="sec-input"
                        className="col-sm-2 col-form-label"
                      >
                        بخش
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="custom-select"
                          name="Ticket_Section"
                          required
                          id="sec-input"
                        >
                          <option value="0">پشتیبانی</option>
                          <option value="2">فنی</option>
                          <option value="1">مالی</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <label
                        for="texts-input"
                        className="col-sm-12 col-form-label"
                      >
                        متن پیام
                      </label>
                      <div className="col-sm-12">
                        <textarea
                          name="Ticket_Description"
                          className="form-control"
                          id="texts-input"
                          rows="4"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <label
                        for="texts-input"
                        className="col-sm-12 col-form-label"
                      >
                        بارگذاری عکس
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="file"
                          accept="image/*"
                          name="Ticket_Image"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary mr-auto">
                    ثبت درخواست
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Support;