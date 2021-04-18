import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="col-xl-9 col-lg-9 col-md-9 col-xs-9 col-9 ">
        <div className="dashboard">
          <h4>داشبورد</h4>

          <p className="centertext">
            برای انجام هر گونه تغییرات کلید ویرایش در انتهای همین صفحه را انتخاب
            کنید
          </p>

          <form
            method="POST"
            enctype="multipart/form-data"
            action="/profile/dashboard/update"
          >
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              value="xvYaY5jPIYLy3Yvs3xcK8KtE6lo0fPd3vVi8aejotfsHwcUU0cQzBHwmbB1CzcrB"
            />
            <div
              className="form-row"
              style={{ display: "none" }}
              id="pic-profile-add"
            >
              <div className="form-group col-md-6">
                <div id="msg"></div>
                <label for="file">عکس پروفایل</label>
                <input
                  type="file"
                  name="Profile_Image"
                  className="file file-image-dash"
                  accept="image/*"
                />
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control input"
                    disabled
                    placeholder="آپلود عکس"
                    id="file"
                  />
                  <div className="input-group-append">
                    <button type="button" className="browse btn btn-primary">
                      بارگذاری
                    </button>
                  </div>
                </div>
                <br />
                <img
                  src="https://placehold.it/80x80"
                  id="preview"
                  className="img-thumbnail"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputFirstName">
                  نام <code>*</code>
                </label>
                <input
                  readonly
                  value="میلاد"
                  type="text"
                  name="User_FirstName"
                  className="form-control"
                  id="inputFirstName"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">
                  نام خانوادگی <code>*</code>
                </label>
                <input
                  readonly
                  value="حسنی"
                  type="text"
                  name="User_LastName"
                  className="form-control"
                  id="inputLastName"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputSex">جنسیت</label>
                <select
                  id="inputSexState"
                  name="Profile_SexState"
                  className="form-control selcetoption"
                  disabled
                >
                  <option selected disabled>
                    انتخاب جنسیت
                  </option>
                  <option>زن</option>
                  <option>مرد</option>
                </select>
              </div>
              <div className="form-group col-md-8">
                <label for="inputBio">درباره من</label>
                <input
                  readonly
                  value=""
                  type="text"
                  name="Profile_Bio"
                  className="form-control"
                  id="inputBio"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputUserName">
                  نام کاربری <code>*</code>
                </label>
                <fieldset disabled>
                  <input
                    readonly
                    value="09224930689"
                    type="text"
                    name="User_UserName"
                    className="form-control"
                    id="inputUserName"
                    required
                  />
                </fieldset>
              </div>
              <div className="form-group col-md-6">
                <label for="inputEmail">ایمیل </label>
                <input
                  readonly
                  value=""
                  type="email"
                  name="User_Email"
                  className="form-control"
                  id="inputEmail"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputNationalCode">
                  کد ملی <code>*</code>
                </label>
                <fieldset disabled>
                  <input
                    type="text"
                    id="inputNationalCode"
                    name="Profile_NationalCode"
                    className="form-control"
                    placeholder="None"
                    required
                  />
                  <small
                    className="form-text text-muted"
                    id="helpinputNationalCode"
                  >
                    توجه : برای ویرایش کدملی درخواست را به{" "}
                    <a href="/profile/ticketing/">بخش پشتیبانی</a> ارسال کنید.
                  </small>
                </fieldset>
              </div>
              <div className="form-group col-md-6">
                <label for="inputBrithDay">تاریخ تولد</label>
                <input
                  readonly
                  value="1400-01-14"
                  type="text"
                  name="Profile_BrithDay"
                  className="form-control"
                  id="inputBrithDay"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputState">استان</label>
                <select
                  disabled
                  name="Profile_State"
                  className="chosen-select-rtl form-control choose-state-chosen"
                  id="inputprofState"
                >
                  <option value="0">استان خود را انتخاب نمائید...</option>
                  <option value="2">مرکزی</option>
                  <option value="3">خراسان شمالی</option>
                  <option value="4">گلستان</option>
                  <option value="5">قزوین</option>
                  <option value="6">قم</option>
                  <option value="7">اردبیل</option>
                  <option value="8">تهران</option>
                  <option value="9">هرمزگان</option>
                  <option value="10">یزد</option>
                  <option value="11">سمنان</option>
                  <option value="12">زنجان</option>
                  <option value="13">بوشهر</option>
                  <option value="14">کهگیلویه وبویراحمد</option>
                  <option value="15">ایلام</option>
                  <option value="16">خراسان جنوبی</option>
                  <option value="17">لرستان</option>
                  <option value="18">همدان</option>
                  <option value="19">کردستان</option>
                  <option value="20">سیستان وبلوچستان</option>
                  <option value="21">اصفهان</option>
                  <option value="22">خراسان رضوی</option>
                  <option value="23">کرمان</option>
                  <option value="24">فارس</option>
                  <option value="25">خوزستان</option>
                  <option value="26">کرمانشاه</option>
                  <option value="27">آذربایجان غربی</option>
                  <option value="28">آذربایجان شرقی</option>
                  <option value="29">مازندران</option>
                  <option value="30">گیلان</option>
                  <option value="31">چهارمحال وبختیاری</option>
                  <option value="32">البرز</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="inputBigCity">شهرستان</label>
                <select
                  disabled
                  name="Profile_BigCity"
                  className="chosen-select-rtl form-control choose-bigcity-chosen"
                  id="inputprofBigCity"
                >
                  <option value="0">شهرستان خود را انتخاب نمائید...</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="inputCity">شهر</label>
                <select
                  disabled
                  name="Profile_City"
                  className="chosen-select-rtl form-control choose-city-chosen"
                  id="inputprofCity"
                >
                  <option value="0">شهر خود را انتخاب نمائید...</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label for="inputZipCode">کد پستی</label>
                <input
                  readonly
                  value=""
                  type="text"
                  name="Profile_ZipCode"
                  minlength="10"
                  maxlength="10"
                  className="form-control"
                  id="inputZipCode"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputAddress">آدرس</label>
                <input
                  readonly
                  value=""
                  type="text"
                  name="Profile_Address"
                  className="form-control"
                  id="inputAddress"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputTutorialWebsite">نحوه آشنایی با سایت</label>
                <select
                  id="inputTutorialWebsite"
                  name="Profile_TutorialWebsite"
                  className="form-control selcetoption"
                  disabled
                >
                  <option>موتور های جستجو</option>
                  <option>حجره داران</option>
                  <option>شبکه های اجتماعی</option>
                  <option>کاربران</option>
                  <option>رسانه ها</option>
                  <option>تبلیغات</option>
                  <option>نود ها</option>
                  <option>سایر</option>
                  <option selected>هیچ کدام</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label for="inputPhoneNumber">تلفن ثابت</label>
                <input
                  readonly
                  value=""
                  type="text"
                  name="Profile_PhoneNumber"
                  pattern="[0-9]{8}"
                  className="form-control"
                  id="inputPhoneNumber"
                />
              </div>
              <div className="form-group col-md-1">
                <label for="inputCityPerCode">پیش شماره</label>
                <input
                  readonly
                  value="034"
                  type="text"
                  name="Profile_CityPerCode"
                  maxlength="3"
                  className="form-control"
                  id="inputCityPerCode"
                />
              </div>
              <div className="form-group col-md-5">
                <label for="inputMobileNumber">شماره موبایل</label>
                <fieldset disabled>
                  <input
                    readonly
                    value="09224930689"
                    type="text"
                    name="Profile_MobileNumber"
                    pattern="[0-9]{11}"
                    maxlength="11"
                    className="form-control"
                    id="inputMobileNumber"
                  />
                  <small
                    className="form-text text-muted"
                    id="helpinputMobileNumber"
                  >
                    توجه : برای ویرایش شماره موبایل درخواست را به{" "}
                    <a href="/profile/ticketing/">بخش پشتیبانی</a> ارسال کنید.
                  </small>
                </fieldset>
              </div>
              <div className="form-group col-md-1">
                <label for="inputCountrPreCode">کد کشور</label>
                <fieldset disabled>
                  <input
                    readonly
                    value="098"
                    type="text"
                    name="Profile_CountrPreCode"
                    className="form-control"
                    pattern="[0-9]"
                    id="inputCountrPreCode"
                  />
                </fieldset>
              </div>
            </div>
            <span className="btn btn-primary" id="readonlyswitchbtn">
              ویرایش
            </span>
            <button
              type="submit"
              className="btn btn-primary mr-auto"
              id="edit-profile"
            >
              ویرایش اطلاعات
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Dashboard;
