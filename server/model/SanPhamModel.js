const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sanphamSchema = new Schema(
  {
    tensp: {
      type: String,
    },
    motasp: {
      type: String,
    },
    hinhanhSP: {
      type: String,
    },
    loaiSP: {
      type: mongoose.Types.ObjectId,
      ref: "LoaiSP",
    },
    giasp: {
      type: Number,
      min: 0,
    },
  },
 
);
const SanPham = mongoose.model("SanPham", sanphamSchema);
module.exports = SanPham;
