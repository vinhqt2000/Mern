const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const KhachHang = require("../model/KhachHangModel");

router.post("/dangnhap", async (req, res) => {
  const khach = await KhachHang.findOne({ email: req.body.email });
  if (khach) {
    const validPassword = await bcrypt.compare(
      req.body.password,
      khach.password
    );
    if (validPassword) {
      res.status(200).json({
        message: "Đăng nhập thành công",
        _id: khach._id,
        hoten: khach.hoten,
        email: khach.email,
        sdt: khach.sdt,
        diachi: khach.diachi,
      });
    } else {
      res.status(400).json({ error: "Sai mật khẩu" });
    }
  } else {
    res.status(401).json({ error: "Tài khoản không tồn tại" });
  }
});

router.post("/dangky", async (req, res) => {
  const khach = new KhachHang({
    hoten: req.body.hoten,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    sdt: req.body.sdt,
    diachi: req.body.diachi,
  });
  const cus = await khach.save();
  res.json({
    message: "Đăng ký thành công",
  });
});

module.exports = router;
