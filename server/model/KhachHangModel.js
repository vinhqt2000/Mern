const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const khachkangSchema = new Schema(
  {
    hoten: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    sdt: {
      type: String,
    },
    diachi: {
      type: String,
    },
  },
);
const KhachHang = mongoose.model("KhachHang", khachkangSchema);
module.exports = KhachHang;
