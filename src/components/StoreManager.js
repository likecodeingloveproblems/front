import React, { Component } from "react";

class StoreManager extends React.Component {
  render() {
    return (
      <div className="col-9">
        <div className="row">
          <div className="col-xl-12 col-12">
            <div className="dashboard">
              <h4>اطلاعات حساب</h4>

              <form
                method="POST"
                action="/profile/shop-manager/add/bank-account-info/"
              >
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="00PKcqshh4KYczh7pevXg3pHTXu5sRJCYq9IozsQ2lr7FNGzmT9MJ0spYd7HMeXa"
                ></input>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="AccountOwnerBuilder">
                      نام و نام خانوادگی صاحب حساب :
                    </label>
                    <input
                      type="text"
                      name="Shop_AccountOwner"
                      className="form-control"
                      id="AccountOwner"
                      required
                    ></input>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="CreditCardNumberBuilder">شماره کارت :</label>

                    <input
                      type="text"
                      name="Shop_CreditCardNumber"
                      className="form-control"
                      id="CreditCardNumber"
                      pattern="[0-9]{16,16}"
                      required
                    ></input>

                    <small className="smallhelp">
                      شماره کارت خود را به صورت اعداد و بدون فاصله، "-" یا "_"
                      وارد کنید.
                    </small>
                    <br></br>
                    <small className="smallhelp">
                      طول شماره کارت وارد شده باید 16 رقم باشد!
                    </small>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="ShabaBankNumberBuilder">شماره شبا :</label>

                    <div className="input-group mb-2 formshaba">
                      <div className="input-group-prepend">
                        <input
                          type="text"
                          name="Shop_ShabaBankNumber"
                          className="form-control"
                          id="ShabaBankNumber"
                          pattern="[0-9]{24,24}"
                          required
                        ></input>

                        <div className="input-group-text">IR</div>
                      </div>

                      <small className="smallhelp">
                        شماره شبا خود را به صورت اعداد و بدون فاصله وارد کنید.
                      </small>
                      <br></br>
                      <small className="smallhelp">
                        طول شماره شبا وارد شده باید 24 رقم باشد!
                      </small>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <button className="btn btn-primary float-left">ثبت</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="dashboard dashboard-padding">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-12 top-of-shops">
                <h3>
                  {" "}
                  حجره ها{" "}
                  <a
                    href="/profile/shop-manager/add/shop"
                    className="add-new-inprofile"
                  >
                    افزودن حجره
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StoreManager;
