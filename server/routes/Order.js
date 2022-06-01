const express = require("express");
const router = express.Router();
const Order = require("../model/DonHangModel");

router.post("/", async (req, res) => {
  const newDH = new Order({
    items: req.body.items,
    diachi: req.body.diachi,
    sdt: req.body.sdt,
    email: req.body.email,
    tonggia: req.body.tonggia,
    khachhang: req.body.khachhang,
  });
  const TaoDHMoi = await newDH.save();
  res.status(201).json({ message: "Đơn hàng tạo thành công", data: TaoDHMoi });
});

module.exports = router;
