import React, { Component } from "react";

export default class CartPage extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Available</th>
                  <th scope="col" className="text-center">
                    Số lượng
                  </th>
                  <th scope="col" className="text-right">
                    Giá
                  </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff" alt="" />
                  </td>
                  <td>Product Name Dada</td>
                  <td>In stock</td>
                  <td>
                    <input className="form-control" type="text" value="1" />
                  </td>
                  <td className="text-right">124,90 €</td>
                  <td className="text-right">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff" alt="" />
                  </td>
                  <td>Product Name Toto</td>
                  <td>In stock</td>
                  <td>
                    <input className="form-control" type="text" value="1" />
                  </td>
                  <td className="text-right">33,90 €</td>
                  <td className="text-right">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dummyimage.com/50x50/55595c/fff" alt="" />
                  </td>
                  <td>Product Name Titi</td>
                  <td>In stock</td>
                  <td>
                    <input className="form-control" type="text" value="1" />
                  </td>
                  <td className="text-right">70,00 €</td>
                  <td className="text-right">
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>Tổng đơn hàng</strong>
                  </td>
                  <td className="text-right">
                    <strong>346,900 VNĐ</strong>
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
              <div className="p-3">
                <div
                  className="input-group mb-4 border rounded-pill p-2"
                  style={{ alignItems: "center" }}
                >
                  <label className="form-control border-0 ">
                    Tên Khách hàng:
                  </label>
                  <label className="form-control border-0">
                    <b>Nguyên Văn A</b>
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
                    className="form-control border-0"
                    value="3888/ an bình"
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
                    placeholder="Số điện thoại"
                    aria-describedby="button-addon3"
                    className="form-control border-0"
                    value="0909090909"
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
                    value="A@gmail.com"
                  />
                </div>
                <div
                  className="input-group mb-4 border rounded-pill p-2"
                  style={{ alignItems: "center" }}
                >
                  <label className="form-control border-0 ">Ngày đặt:</label>
                  <label className="form-control border-0">
                    <b>12/12/2022</b>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12  col-md-6">
              <button className="btn btn-lg btn-block btn-danger text-uppercase">
                Tiếp tục mua hàng
              </button>
            </div>
            <div className="col-sm-12 col-md-6 text-right">
              <button className="btn btn-lg btn-block btn-success text-uppercase">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
