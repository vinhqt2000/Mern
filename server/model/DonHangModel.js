const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    items: [
      {
        tensp: {
          type: String,
        },
        soluong: {
          type: Number,
        },
        giasp: {
          type: Number,
        },
        hinhanhSP: {
          type: String,
        },
        sanpham: {
          type: mongoose.Types.ObjectId,
          ref: "SanPham",
        },
      },
    ],
    diaChiGiao: {
      type: String,
    },
    sdt: {
      type: String,
    },
    email: {
      type: String,
    },
    tonggia: {
      type: Number,
    },
    khachhang: {
      type: mongoose.Types.ObjectId,
      ref: "KhachHang",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
