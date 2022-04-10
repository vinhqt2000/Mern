import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryView() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories/")
      .then((res) => {
        console.log(res);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-12 col-sm-3">
      <div className="card bg-light mb-3">
        <div className="card-header bg-success text-white text-uppercase">
          <i className="fa fa-list"></i> Loại sản phẩm
        </div>

        <ul className="list-group category_block">
          {category.map((item, index) => (
            <li className="list-group-item" key={index}>
              <Link to={`/sanpham?cate=${item._id}`}>{item.tenloai}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CategoryView;
