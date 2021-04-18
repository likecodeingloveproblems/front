import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
  render() {
    return (
      <div className="col-xl-9 col-lg-9 col-md-9 col-xs-9 col-9">
        <div className="order-profile">
          <h4>نظرات</h4>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>نوع</th>
                <th>متن</th>
                <th>مخاطب</th>
                <th>تعداد لایک</th>
                <th>تاریخ</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Review