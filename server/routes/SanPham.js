const express = require("express");
const { query } = require("express");
const router = express.Router();
const Sanpham = require("../model/SanPhamModel");
// ds sản phẩm

router.get("/", async (req, res) => {
  let filter = {};
  if (req.query.cate) {
    filter = { loaiSP: req.query.cate };
  }
  console.log(filter);

  const listsanpham = await Sanpham.find(filter).populate("loaiSP");
  if (listsanpham) {
    res.json(listsanpham);
  } else {
    res.status(400).json({ message: "Không có sản phẩm" });
  }
});

router.get("/:id", async (req, res) => {
  const sanpham = await Sanpham.findById(req.params.id);
  if (sanpham) {
    res.json(sanpham);
  } else {
    res.status(400).json({ message: "Không tìm thấy sản phẩm" });
  }
});

module.exports = router;
