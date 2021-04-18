import React, { Component } from "react";
import './Factor.css'

class Factor extends React.Component {
  render() {
    return (
      <div class="col-xl-9 col-lg-9 col-md-9 col-xs-9 col-9">
        <div class="factor-profile">
          <h4>خرید های من</h4>

          <table class="table">
            <thead class="thead-light">
              <tr>
                <th>شماره صورت حساب</th>
                <th>مبلغ</th>
                <th>تاریخ خرید</th>
                <th>وضعیت پرداخت</th>
                <th>وضعیت سفارش</th>
                <th>وضعیت</th>
                <th>نمایش</th>
              </tr>
            </thead>
            <tbody class="code"></tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Factor;