const express = require("express");
const { query } = require("express");
const express = require("express");
const router = express.Router();
const Sanpham = require("../model/SanPhamModel");
// ds sản phẩm
// router.route("/list-sanpham").get((req, res) => {
//   sanpham
//     .find()
//     .populate("loaiSP", "tenloai")
//     .then((data) => res.json(data))
//     .catch((err) => res.status(400).json("Error:" + err));
// });
// router.get("/", async (req, res) => {
//   const sanphams = await Sanpham.find({}).populate("loaiSP", "tenloai");
//   if (sanphams) {
//     res.send(sanphams);
//   } else {
//     res.status(400).send({ message: "Không có sản phẩm" });
//   }
// });

router.get("/", async (req, res) => {
  // tìm sản phẩm theo cate
  let filter = {};
  if (req.query.cate) {
    filter = { loaiSP: req.query.cate };
  }
  console.log(filter);
  //

  const listsanpham = await Sanpham.find(filter).populate("loaiSP");
  if (listsanpham) {
    res.send(listsanpham);
  } else {
    res.status(400).send({ message: "Không có sản phẩm" });
  }
});

// router.get("/user", function (req, res) {
//   console.log("Name: ", req.query.name);
//   res.send();
// });

// san pham theo id

router.get("/:id", async (req, res) => {
  const sanpham = await Sanpham.findById(req.params.id);
  if (sanpham) {
    res.send(sanpham);
  } else {
    res.status(400).send({ message: "Không tìm thấy sản phẩm" });
  }
});

// sản phẩm theo cate
// router.get("/cate/:loaiSP", async (req, res) => {
//   const productCate = await Sanpham.find({
//     loaiSP: req.params.loaiSP,
//   }).populate("loaiSP");
//   res.json(productCate);
// });

//
// router.get("/loaiSP/:id", async (req, res) => {
//   const uniqueCate = await Sanpham.distinct('giasp', (err, loaiSPs) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Không tìm thấy  loại sản phẩm",
//       });
//     }
//   });
//   res.json(uniqueCate);
// });

module.exports = router;
