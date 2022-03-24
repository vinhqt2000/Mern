import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div style={{ marginTop: "100px" }}>
      <footer className="text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3">
              <h5>Về chúng tôi</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <p className="mb-0">Cửa hàng Fresh-Food</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3">
              <h5>Liên hệ</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:dtnsuper@gmail.com">
                    <i className="fas fa-envelope"></i> Contact:
                    dtnsuper@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:0388818270">
                    <i className="fas fa-phone-square-alt"></i> 0388818270
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/WE9cQiBUEa3KYkbE6">
                    <i className="fas fa-warehouse"></i> Thới Sơn, Mỹ Tho, Tiền
                    Giang
                  </a>
                </li>
                <li>
                  <a href="tel:1811061168">
                    <i className="fas fa-phone-square-alt"></i> 1811061168
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h5>Trợ giúp nhanh</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li>
                  <Link to="/gioithieu">
                    <i className="fas fa-chevron-right"></i> Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link to="/huongdanthanhtoan">
                    <i className="fas fa-chevron-right"></i> Hướng dẫn thành
                    toán
                  </Link>
                </li>
                <li>
                  <Link to="/huongdanmuahang">
                    <i className="fas fa-chevron-right"></i> Hướng dẫn mua hàng
                  </Link>
                </li>
                <li>
                  <Link to="/lienhe">
                    <i className="fas fa-chevron-right"></i> Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3">
              <h5>Chính sách bán hàng</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li>
                  <Link to="/chinhsachvaquydinhchung">
                    <i className="fas fa-chevron-right"></i> Chính sách và quy
                    định chung
                  </Link>
                </li>
                <li>
                  <Link to="/chinhsachvanchuyen">
                    <i className="fas fa-chevron-right"></i> Chính sách vận
                    chuyển
                  </Link>
                </li>
                <li>
                  <Link to="/chinhsachdoitrahang">
                    <i className="fas fa-chevron-right"></i> Chính sách đổi trả
                    hàng
                  </Link>
                </li>
                <li>
                  <Link to="/chinhsachbaomatthongtin">
                    <i className="fas fa-chevron-right"></i> Chính sách bảo mật
                    thông tin
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3">
              <img
                src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/42008041469/original/Mo9gDy2XMZLppkUw4sWCsYV-lk65HqqgQw.gif?1539077990"
                alt=""
                width={"50%"}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
