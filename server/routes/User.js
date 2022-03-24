const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { generateToken } = require("../utils/utils");
const KhachHang = require("../model/KhachHangModel");

//login
router.post("/dangnhap", async (req, res) => {
  const khach = await KhachHang.findOne({ email: req.body.email });
  if (khach) {
    if (bcrypt.compareSync(req.body.password, khach.password)) {
      res.send({
        _id: khach._id,
        hoten: khach.hoten,
        email: khach.email,
        sdt: khach.sdt,
        diachi: khach.diachi,
        token: generateToken(khach),
      });
      return;
    }
  }
  res.status(401).send({ message: "sai tài khoản hoặc email" });
});
//dang ky
router.post("/dangky", async (req, res) => {
  const khach = new KhachHang({
    hoten: req.body.hoten,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    sdt: req.body.sdt,
    diachi: req.body.diachi,
  });
  const createuser = await khach.save();
  res.send({
    _id: createuser._id,
    hoten: createuser.hoten,
    email: createuser.email,
    sdt: createuser.sdt,
    diachi: createuser.diachi,
    token: generateToken(createuser),
  });
});

router.get("/:id", async (req, res) => {
  const khach = await KhachHang.findById(req.params.id);
  if (khach) {
    res.send(khach);
  } else {
    res.status(400).send({ message: " không tìm thấy người dùng" });
  }
});

module.exports = router;
