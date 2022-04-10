import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMess, setErrorMess] = useState("");
  useEffect(() => {
    setErrorMess("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/dangnhap", {
        email: email,
        password: password,
      });
      sessionStorage.setItem("userInfo", JSON.stringify(response.data));
      window.location.href = "/sanpham";
    } catch (err) {
      setErrorMess("Đăng nhập thất bại");
    }
  };

  return (
    <div className="container">
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div className="container ">
              <h4 style={{ textAlign: "center" }}>
                <b>Đăng nhập</b>
              </h4>
              <hr />
              <div>{errMess}</div>
              <form
                onSubmit={handleSubmit}
                className="login-form "
                style={{ width: "40", padding: "25px" }}
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    autoFocus
                    id="email"
                    value={email}
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    required
                    id="password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <hr />
                <div className="clearfix form-group">
                  <label className="float-left form-check-label">
                    <Link to="/dangky">Đăng ký tài khoản?</Link>
                  </label>
                  <Link to="" style={{ float: "right" }}>
                    Quên mật khẩu?
                  </Link>
                </div>
                <hr />
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-success"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
