import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Header() {
  const [cartItems, setCartItems] = useState([]);

  let userInfo = JSON.parse(localStorage.getItem("customerInfo"));

  const signout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="nav-link">
            <img
              src="https://thuonglai.vn/image/catalog/logo/logo_big-1.png"
              alt=""
              height={"49px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav m-auto dropdown">
              <li className="nav-item active"></li>
              <li className="nav-item">
                <Link to="/sanpham" className="nav-link">
                  Sản phẩm
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/donhang" className="nav-link">
                  Đơn hàng
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/lienhe" className="nav-link">
                  Liên hệ
                </Link>
              </li>
              <li className="nav-item">
                {userInfo ? (
                  <li className="nav-item dropdown">
                    <b
                      className="nav-link dropdown-toggle"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hello: {userInfo.hoten}
                    </b>
                    <ul
                      className="dropdown-menu bg-dark"
                      aria-labelledby="dropdownMenuLink"
                      style={{ padding: "10px", marginBottom: "10px" }}
                    >
                      <li className="nav-item">
                        <b style={{ color: "white" }}> Lịch sử đơn hàng </b>{" "}
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="nav-item"
                          style={{ color: "white" }}
                          onClick={signout}
                        >
                          Đăng xuất
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <Link to="/dangnhap" className="nav-link">
                    Đăng nhập
                  </Link>
                )}
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm..."
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-secondary btn-number"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>

              <Link to="/giohang" className="btn btn-success btn-sm ml-3">
                <i className="fa fa-shopping-cart"></i>Giỏ hàng
                <span className="badge badge-light">1</span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
