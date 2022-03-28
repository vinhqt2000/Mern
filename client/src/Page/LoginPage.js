import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  // const login = () => {
  //   Axios.post("http://localhost:5000/user/dangnhap", {
  //     email: email,
  //     password: password,
  //   })
  //     .then((res) => {
  //       localStorage.setItem("token", JSON.stringify(res.data));
  //       console.log(res.data);
  //       res.status(201).send();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const submitForm = async (e) => {
    e.preventDefault();

    await Axios.post("http://localhost:5000/user/dangnhap", {
      email: email,
      password: password,
    })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("customerInfo", JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container">
        {/* <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item">Đăng nhập</li>
              </ol>
            </nav>
          </div>
        </div> */}

        <div className="col-md-12">
          <div className="row">
            <div className="container ">
              <h4 style={{ textAlign: "center" }}>
                <b>Đăng nhập</b>
              </h4>
              <hr />

              <form
                className="login-form "
                style={{ width: "40", padding: "25px" }}
                onSubmit={submitForm}
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <hr />
                <div className="clearfix form-group">
                  <label className="float-left form-check-label">
                    <Link to="">Đăng ký tài khoản?</Link>
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
                    // onClick={login}
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
              <b>{}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
