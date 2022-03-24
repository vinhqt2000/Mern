const { isAuth } = require("../utils/utils");
const express = require("express");
const router = express.Router();
const Order = require("../model/DonHangModel");

// lấy ds order của cus
router.get("/donhang", isAuth, async (req, res) => {
  const orders = await Order.find({ khachhang: req.khachhang._id });
  res.send(orders);
});

//lấy 1 order
router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Không tìm thấy đơn hàng");
  }
});
router.delete("/:id", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    const deleteOrder = await order.remove();
    res.send(deleteOrder);
  } else {
    res.status(404).send("Không tìm thấy đơn hàng");
  }
});

router.post("/", isAuth, async (req, res) => {
  const newDH = new Order({
    items: req.body.items,
    diachiGiao: req.body.diachiGiao,
    giamua: req.body.giamua,
    sdt: req.body.sdt,
    email: req.body.email,
    tonggia: req.body.tonggia,
    khachhang: req.khachhang._id,
  });
  const TaoDHMoi = await newDH.save();
  res.status(201).send({ message: "Đơn hàng tạo thành công", data: TaoDHMoi });
});

module.exports = router;
