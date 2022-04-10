import "./App.css";
import "./Css/Style.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
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
import { useEffect, useState } from "react";
import SuccessOrder from "./Page/SuccessOrder";
import RegisterPage from "./Page/RegisterPage";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || []
  );
  const [user, setUser] = useState([]);
  const fetchData = () => {
    const items = JSON.parse(sessionStorage.getItem("userInfo"));
    if (items) {
      setUser(items);
    }
  };
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
    fetchData();
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Header cart={cart} user={user} />
        <Banner />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/sanpham"
                element={<ProductPage cart={cart} setCart={setCart} />}
              />
              <Route
                path="/giohang"
                element={<CartPage cart={cart} setCart={setCart} user={user} />}
              />
              {/* <Route path="/sanpham/:id" element={<DetailProductPage />} /> */}
              <Route path="/gioithieu" element={<AboutPage />} />
              <Route path="/huongdanthanhtoan" element={<PaymentGuide />} />
              <Route path="/dangnhap" element={<LoginPage />} />
              <Route path="/dangky" element={<RegisterPage />} />
              <Route
                path="/sanpham/:id"
                element={<DetailPage />}
                cart={cart}
                setCart={setCart}
              />
              <Route path="/successOrder" element={<SuccessOrder />} />
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
    </Router>
  );
}

export default App;
