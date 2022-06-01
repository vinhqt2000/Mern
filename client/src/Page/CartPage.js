import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function CartPage({ cart, setCart, user }) {
  const navigation = useNavigate();
  const TongDH = () => {
    return cart.reduce((sum, { giasp, soluong }) => sum + giasp * soluong, 0);
  };
  const xoasp = (product) => {
    setCart(cart.filter((i) => i !== product));
  };
  const eventSoLuong = (product, data) => {
    if (product.soluong < 1) {
      xoasp(product);
    } else {
      setCart((cart) =>
        cart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                soluong: item.soluong + data,
              }
            : item
        )
      );
    }
  };
  const xoaCart = () => {
    setCart([]);
  };
  const clickOrder = async () => {
    if (!user && !user.hoten) {
      navigation("/dangnhap");
    }
    try {
      const response = await axios.post("http://localhost:5000/order", {
        items: cart,
        diachiGiao: user.diachi,
        giamua: cart.giasp,
        sdt: user.sdt,
        email: user.email,
        tonggia: TongDH(),
        khachhang: user._id,
      });
      console.log(response.data);
      xoaCart();
      navigation("/successOrder");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Tên sản phẩm</th>

                <th scope="col" className="text-center">
                  Số lượng
                </th>
                <th scope="col" className="text-right">
                  Giá
                </th>
                <th scope="col">Tổng giá sản phẩm</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, i) => (
                <tr key={i}>
                  <td>
                    <img src={product.hinhanhSP} alt="sản phẩm" width={70} />
                  </td>

                  <td style={{ color: "black", fontWeight: "bold" }}>
                    <Link to={`/sanpham/${product._id}`}>{product.tensp}</Link>
                  </td>

                  <td>
                    <button onClick={() => eventSoLuong(product, -1)}>-</button>
                    <input
                      className="input-group-field"
                      type="number"
                      value={product.soluong}
                      style={{ width: "70px", textAlign: "center" }}
                      readOnly
                    />

                    <button onClick={() => eventSoLuong(product, 1)}>+</button>
                  </td>
                  <td className="text-right">
                    {product.giasp.toLocaleString()} VNĐ
                  </td>
                  <td>
                    {(product.giasp * product.soluong).toLocaleString()}VNĐ
                  </td>
                  <td className="text-right">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => xoasp(product)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <strong>Tổng đơn hàng</strong>
                </td>
                <td className="text-right">
                  <strong>{TongDH().toLocaleString()} VNĐ</strong>
                  <div></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col mb-2">
        <div className="row">
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Thông tin giao hàng
            </div>

            {(user && user.hoten) != null ? (
              <div className="p-3">
                <div
                  className="input-group mb-4 border rounded-pill p-2"
                  style={{ alignItems: "center" }}
                >
                  <label className="form-control border-0 ">
                    Tên Khách hàng:
                  </label>
                  <label className="form-control border-0">
                    <b>{user.hoten}</b>
                  </label>
                </div>
                <div
                  className="input-group mb-4 border rounded-pill p-2"
                  style={{ alignItems: "center" }}
                >
                  <label className="form-control border-0 ">Địa chỉ:</label>
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    aria-describedby="button-addon3"
                    readOnly
                    className="form-control border-0"
                    value={user.diachi}
                  />
                </div>
                <div
                  className="input-group mb-4 border rounded-pill p-2"
                  style={{ alignItems: "center" }}
                >
                  <label className="form-control border-0 ">
                    Số điện thoại:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder="Số điện thoại"
                    aria-describedby="button-addon3"
                    className="form-control border-0"
                    value={user.sdt}
                  />
                </div>
                <div
                  className="input-group mb-4 border rounded-pill p-2"
                  style={{ alignItems: "center" }}
                >
                  <label className="form-control border-0 ">Email:</label>
                  <input
                    type="text"
                    placeholder="Email"
                    aria-describedby="button-addon3"
                    className="form-control border-0"
                    value={user.email}
                    readOnly
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12  col-md-6">
            <Link
              to="/sanpham"
              className="btn btn-lg btn-block btn-danger text-uppercase"
            >
              Tiếp tục mua hàng
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 text-right">
            <button
              className="btn btn-lg btn-block btn-success text-uppercase"
              onClick={clickOrder}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
