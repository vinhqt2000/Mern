import { Link } from "react-router-dom";
import CategoryView from "./CategoryView";

export default function SuccessOrder() {
  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/sanpham">Home</Link>
                </li>
                <li className="breadcrumb-item">Thông báo</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ display: "flex" }}>
          <CategoryView />
          <div style={{ marginLeft: "150px" }}>
            <h3 style={{ textAlign: "center" }}>
              <b>Thanh toán mua hàng thành công</b>
            </h3>
            <h3 style={{ textAlign: "center" }}>
              <b>Cảm ơn bạn đã mua hàng của chúng tôi</b>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
