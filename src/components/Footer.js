import React, { Component } from "react";
import "./Footer.css";
import data from "../data.json";


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row footer-top">
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 ">
              <p> با خدمات بازار نخل در ۷ روز هفته همراه ما باشید.</p>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 call-footer">
              <div>
                <i className="fal fa-headphones-alt"></i>
              </div>
              <div>phoneNumbrrrrrrrrrr</div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 call-footer">
              <div>
                <i className="fal fa-envelope"></i>
              </div>
              <div>
                ایمیل
                <br />
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="01686f676e416f606a696d6d2f626e6c"
                >
                  [email&#160;protected]
                </a>
              </div>
            </div>
          </div>
        </div>

        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 about-footer">
                <div className="logo-info">
                  <div className="logo-footer">
                    <img src={data.icons.footer.Nakhl} alt="logo" />
                  </div>
                  <div className="about-footer">
                    <p>
                      رویکرد اصلی بازار نخل زمینه سازی جهت حضور کسب و کار هایی
                      است اصیل و پر معنا در سرتاسر ایران، که علاوه بر آن سهم
                      بالایی از تجارب مردم را به خود اختصاص میدهد .
                      <a href="/pages/static/aboutus/">بیشتر بخوانید</a>
                    </p>

                    <div className="icon-footer">
                      <a
                        href="https://www.instagram.com/nakhll1/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="list-footer">
                  <h6>فهرست عناوین</h6>
                  <ul>
                    <li>
                      <a href="/pages/static/rules/">شرایط و ضوابط</a>
                    </li>
                    <li>
                      <a href="/pages/static/aboutus/">درباره ما</a>
                    </li>
                    <li>
                      <a href="/pages/connectus/">تماس با ما</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="slider-license-footer ">
                  <div
                    id="myCarousel"
                    className="carousel slide footerslidecarousel"
                    data-ride="carousel"
                    data-interval="1500"
                  >
                    <div
                      className="slideshow"
                      className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"
                    >
                      <div className="slideshowB">
                        <img
                          referrerpolicy="origin"
                          id="jxlzfukzrgvjesgtnbqesizp"
                          style={{ cursor: "pointer" }}
                          onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=163029&p=rfthgvkaxlaoobpduiwkpfvl", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                          alt="logo-samandehi"
                          src="https://logo.samandehi.ir/logo.aspx?id=163029&p=nbpdwlbqqftilymaodrfbsiy"
                        />
                      </div>
                      <div className="slideshowB">
                        <a
                          referrerpolicy="origin"
                          target="_blank"
                          href="https://trustseal.enamad.ir/?id=135577&amp;Code=4LVJlUntZdqZWSmXWkA1"
                        >
                          <img
                            referrerpolicy="origin"
                            src="https://Trustseal.eNamad.ir/logo.aspx?id=135577&amp;Code=4LVJlUntZdqZWSmXWkA1"
                            alt=""
                            style={{ cursor: "pointer" }}
                            id="4LVJlUntZdqZWSmXWkA1"
                          />
                        </a>
                      </div>

                      <div className="slideshowB">
                        <a
                          target="_blank"
                          href="http://kerman.irannsr.org/services/trade_unit/319012-%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%86%D9%88%DB%8C%D8%AF-%D8%AA%DB%8C%D9%85%DA%86%D9%87-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D9%86%DB%8C%D9%84.html?t=%D8%AC%D8%B3%D8%AA%D8%AC%D9%88%DB%8C-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87"
                          rel="nofollow"
                        >
                          <img
                            src={data.icons.footer.senf}
                            alt="senfi"
                            style={{ cursor: "pointer" }}
                          />
                        </a>
                      </div>
                    </div>

                    <a
                      className="carousel-control-prev"
                      href="#demo"
                      data-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#demo"
                      data-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ marginRight: "45px" }}
                className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"
              >
                <div className="newslatter-footer">
                  <h6>عضویت در خبرنامه</h6>
                  <form
                    className="search-top newslatter"
                    method="POST"
                    action="/addemail/"
                  >
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      value="TMAGGv4zmRlvrcy1LbkRGHQpAROXTpDJRcUESE48782EUqXtIQYG9ET7F7rzdMRh"
                    />
                    <input
                      type="email"
                      placeholder="آدرس ایمیل خود را وارد کنید ..."
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      name="email"
                      id="email"
                    />
                    <button
                      type="submit"
                      value="Submit"
                      className="submit-search"
                    >
                      عضویت
                    </button>
                  </form>
                  <div className="loaderDiv" id="loaderfooter">
                    لطفا منتظر بمانید
                    <img
                      src="/static/images/loading.svg"
                      alt="در حال بارگذاری"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="copy-right-footer">
          <div className="container">
            <div className="row footercopy">
              <div className="col-xl-11 col-lg-11 col-md-10 col-sm-12 col-12">
                <p>
                  تمامی خدمات این وب سایت دارای مجوزهای لازم از مراجع مربوطه می
                  باشد و فعالیت های این سایت تابع قوانین و مقررات جمهوری اسلامی
                  ایران است.
                </p>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-2 col-sm-12 col-12">
                <a href="#">©بازار نخل</a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
