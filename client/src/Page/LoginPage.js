import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  return (
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">Home</li>
                <li class="breadcrumb-item">Đăng nhập</li>
              </ol>
            </nav>
          </div>
        </div>

        <div class="col-md-12">
          <div class="row">
            <div class="container ">
              <h4 style={{ textAlign: "center" }}>
                <b>Đăng nhập</b>
              </h4>
              <hr />

              <div class="login-form " style={{ width: "40", padding: "25px" }}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputuser"
                    name="inputuser"
                    placeholder="Email"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="inputpass"
                    name="inputpass"
                    placeholder="Mật khẩu"
                    required="required"
                  />
                </div>

                <hr />
                <div class="clearfix form-group">
                  <label class="float-left form-check-label">
                    <Link to="">Đăng ký tài khoản?</Link>
                  </label>

                  <Link to="" style={{ float: "right" }}>
                    Quên mật khẩu?
                  </Link>
                </div>
                <hr />
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block btn-success"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
