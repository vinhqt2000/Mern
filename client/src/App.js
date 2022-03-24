import "./App.css";
import "./Css/Style.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ProductPage from "./Page/ProductPage";
import CartPage from "./Page/CartPage";
import AboutPage from "./Page/AboutPage";
import PaymentGuide from "./Page/PaymentGuide";
import PolicyGeneral from "./Page/PolicyGeneral";
import PolicyPrivacy from "./Page/PolicyPrivacy";
import PolicyRefund from "./Page/PolicyRefund";
import PolicyShipping from "./Page/PolicyShipping";
import ShoppingGuide from "./Page/ShoppingGuide";
import LoginPage from "./Page/LoginPage";
import Footer from "./Page/Footer";
import Header from "./Page/Header";
import Banner from "./Page/Banner";
import DetailPage from "./Page/DetailPage";
function App() {
  return (
    <div className="App">
      <Header />

      <Banner />

      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sanpham" element={<ProductPage />} />
            <Route path="/giohang" element={<CartPage />} />
            {/* <Route path="/sanpham/:id" element={<DetailProductPage />} /> */}
            <Route path="/gioithieu" element={<AboutPage />} />
            <Route path="/huongdanthanhtoan" element={<PaymentGuide />} />
            <Route path="/dangnhap" element={<LoginPage />} />
            <Route path="/sanpham/:id" element={<DetailPage />} />

            <Route
              path="/chinhsachvaquydinhchung"
              element={<PolicyGeneral />}
            />
            <Route
              path="/chinhsachbaomatthongtin"
              element={<PolicyPrivacy />}
            />
            <Route path="/chinhsachdoitrahang" element={<PolicyRefund />} />
            <Route path="/chinhsachvanchuyen" element={<PolicyShipping />} />
            <Route path="/huongdanmuahang" element={<ShoppingGuide />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
