import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import CategoryView from "./CategoryView";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const { pathName } = useLocation();

  let url = window.location.search;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/sanpham${url}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(url);
    console.log(pathName);
  }, [url, pathName]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/sanpham">Sản phẩm</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        {/* -- Category -- */}
        <CategoryView />
        {/* -- Category -- */}
        <div className="col-sm-9">
          <div className="row">
            {/* -- Danh sách sản phẩm -- */}
            {/* {this.ListSP()} */}

            {products.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div
                  className="card"
                  style={{ height: "440px", marginBottom: "20px" }}
                >
                  <Link to={`/sanpham/${item._id}`}>
                    <img
                      className="card-img-top"
                      src={item.hinhanhSP}
                      alt="Card  cap"
                      width={200}
                      height={250}
                    />
                  </Link>
                  <div className="card-body">
                    <div>
                      <h6 className="card-title" style={{ fontSize: "13px" }}>
                        <Link to="" style={{ color: "green" }}>
                          {item.tensp}
                        </Link>
                      </h6>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        width: "85%",
                        margin: "auto",
                        bottom: "0",
                      }}
                    >
                      <p className="btn btn-danger btn-block">
                        {item.giasp} VNĐ
                      </p>

                      <button className="btn btn-success btn-block">
                        Thêm giỏ hàng
                      </button>
                    </div>
                    <div className="row">
                      <div className="col"></div>
                      <div className="col"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* -- Danh sách sản phẩm -- */}
            {/* <div className="col-12">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">
                      Trước
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Sau
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
