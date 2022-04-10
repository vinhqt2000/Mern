import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [hoten, setHoten] = useState("");
  const [email, setEmail] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [sdt, setSDT] = useState("");
  const [password, setPassword] = useState("");
  let navigation = useNavigate("");
  const [errMess, setErrorMess] = useState("");

  useEffect(() => {
    setErrorMess("");
  }, [password, hoten, email, diachi, sdt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user/dangky", {
        hoten: hoten,
        email: email,
        password: password,
        sdt: sdt,
        diachi: diachi,
      });
      navigation("/dangnhap");
    } catch (error) {
      setErrorMess("Đăng ký thất bại");
    }
  };

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="container ">
                <h4 style={{ textAlign: "center" }}>
                  <b>Đăng ký tài khoản</b>
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
                      type="text"
                      className="form-control"
                      placeholder="Họ và tên"
                      required
                      autoFocus
                      id="hoten"
                      min={5}
                      max={40}
                      value={hoten}
                      autoComplete="on"
                      onChange={(e) => setHoten(e.target.value)}
                    />
                  </div>
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
                      min={6}
                      max={30}
                      id="password"
                      value={password}
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số điện thoại..."
                      required
                      autoFocus
                      id="sdt"
                      min={10}
                      max={18}
                      value={sdt}
                      autoComplete="on"
                      onChange={(e) => setSDT(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Địa chỉ...."
                      required
                      autoFocus
                      id="diachi"
                      min={7}
                      max={50}
                      value={diachi}
                      autoComplete="on"
                      onChange={(e) => setDiaChi(e.target.value)}
                    />
                  </div>

                  <hr />
                  <div className="clearfix form-group">
                    <label className="float-right form-check-label">
                      <Link to="/dangnhap">Đã có tài khoản?</Link>
                    </label>
                  </div>
                  <hr />
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block btn-success"
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
