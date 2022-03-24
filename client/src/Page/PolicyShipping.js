import React, { Component } from "react";

export default class PolicyShipping extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
          CHÍNH SÁCH VẬN CHUYỂN
        </h1>
        <hr />
        <i>
          Để thuận tiện cho việc vận chuyển hàng hóa và thanh toán, Fresh Foods
          xin đưa ra bảng thông báo gửi đến Quý khách hàng!
        </i>
        <p>
          <strong>
            Để thuận tiện cho việc vận chuyển hàng hóa và thanh toán, Fresh
            Foods xin đưa ra bảng thông báo gửi đến Quý khách hàng!
          </strong>
        </p>
        <p>
          <strong>( Áp dụng cho đơn đặt hàng online )</strong>
        </p>
        <p>Địa điểm ship hàng: FRESHFOODS MART: 42 Trung Hòa.</p>
        <p>Phạm vi giao hàng: Toàn thành phố Hà Nội</p>
        <p>
          <strong>1. Phí vận chuyển</strong>
        </p>
        <p>
          Chính sách giao hàng với 300.000 VNĐ chúng tôi sẽ hỗ trợ giao hàng
          trên toàn bộ quận nội thành Hà Nội
        </p>
        <div>
          <table
            border={1}
            style={{ width: "100%", height: "500px", textAlign: "center" }}
          >
            <tbody>
              <tr>
                <th style={{ width: "80px", textAlign: "center" }}>STT</th>
                <th style={{ width: "150px", textAlign: "center" }}>
                  CHÍNH SÁCH GIAO HÀNG
                </th>
                <th style={{ textAlign: "center" }}>GIÁ TRỊ ĐƠN HÀNG</th>
                <th style={{ textAlign: "center" }}>BÁN KÍNH Km2</th>
                <th style={{ textAlign: "center" }}>CHI PHÍ VẬN CHUYỂN</th>
              </tr>
              <tr>
                <td>1</td>
                <td rowSpan={4}>
                  Chúng tôi hỗ trợ dịch vụ giao hàng tận nơi với đơn hàng trên
                  300.000 trên toàn bộ các Quận nội thành Hà Nội
                </td>
                <td> 500.000đ TRỞ LÊN</td>
                <td>
                  DƯỚI 5 Km<sup>2</sup>
                </td>
                <td>MIỄN PHÍ</td>
              </tr>
              <tr>
                <td>2</td>
                <td> 500.000đ TRỞ LÊN</td>
                <td>
                  DƯỚI 10 Km<sup>2</sup>
                </td>
                <td>MIỄN PHÍ</td>
              </tr>
              <tr>
                <td>3</td>
                <td>DƯỚI 500.000đ</td>
                <td>
                  DƯỚI 5 Km<sup>2</sup>
                </td>
                <td>20.000đ</td>
              </tr>
              <tr>
                <td>4</td>
                <td>DƯỚI 500.000đ TRỞ LÊN</td>
                <td>
                  DƯỚI 10 Km<sup>2</sup> <br />
                  TỪ 10 Km<sup>2</sup> - 15 Km<sup>2</sup>
                </td>
                <td>
                  30.000đ
                  <br />
                  <br />
                  35.000đ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>
            <br />
            2. Thời gian đặt hàng
          </strong>
        </p>
        <p>- Đặt hàng trước 9h30 phút giao trước 11h30 hoặc sớm hơn</p>
        <p>- Đơn đặt 10h30 giao trước 12h hoặc sớm hơn</p>
        <p>- Đơn đặt trước 14h30 chiều giao trước 16h30 sớm hơn</p>
        <p>- Đơn đặt 16h30 chiều giao trước 18h hoặc sớm hơn</p>
        <p>
          - Đơn nhận đặt hàng cuối cùng của ngày 17h sẽ giao trước 19h hoặc sớm
          hơn
        </p>
        <p>
          {" "}
          Những đơn hàng phát sinh sau 17h Fresh Foods Mart xin phép quý khách
          hàng giao hàng ngày hôm sau hoặc thông báo quý khách hàng đến trực
          tiếp cửa hàng nhận hàng
        </p>
        <p>
          <strong>
            <br />
            3. Yêu cầu khi nhận hàng
          </strong>
        </p>
        <p>
          Quý khách vui lòng thanh toán đầy đủ và kiểm tra hàng hóa trước khi
          nhận hàng. Đề nghị giữ lại hóa đơn mua hàng để sử dụng khi có yêu cầu
          về đổi trả sản phẩm
        </p>
        <p>
          Mọi thắc mắc hoặc đóng góp ý kiến của Quý Khách Hàng vui lòng liên hệ:
        </p>
        <p>
          Hotline Đặt Hàng &amp; Chăm Sóc Khách Hàng (Miễn phí):{" "}
          <a href="tel:18006866" style={{ color: "green" }}>
            1800 6866
          </a>
        </p>
        <p>
          Email :{" "}
          <a
            id="a1"
            href="mailto:freshfood@gmail.com"
            style={{ color: "green" }}
          >
            contact@freshfoodsmart.vn
          </a>
        </p>
      </div>
    );
  }
}
