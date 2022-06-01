import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import CategoryView from "./CategoryView";

function ProductPage({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const location = useLocation().search;
  // let url = window.location.search;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/sanpham${location}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  const addToCart = (product) => {
    let cart2 = [...cart];

    let sanpham = cart2.find((item) => product._id === item._id);
    if (sanpham) {
      sanpham.soluong++;
    } else {
      sanpham = {
        ...product,
        soluong: 1,
      };
      cart2.push(sanpham);
    }

    setCart(cart2);
  };

  return (
    <div style={{ minWidth: "100%" }}>
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

            {products.map((item, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4"
                style={{ minWidth: "260px" }}
              >
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
                        <Link
                          to={`/sanpham/${item._id}`}
                          style={{ color: "green" }}
                        >
                          {item.tensp}
                        </Link>
                      </h6>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        width: "85%",
                        margin: "auto",
                        bottom: "10px",
                      }}
                    >
                      <p className="btn btn-danger btn-block">
                        {item.giasp.toLocaleString()} VNĐ
                      </p>

                      <button
                        className="btn btn-success btn-block"
                        onClick={() => addToCart(item)}
                      >
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
