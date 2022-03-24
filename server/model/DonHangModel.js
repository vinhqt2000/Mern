const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  khachhang: {
    type: mongoose.Types.ObjectId,
    ref: "KhachHang",
  },
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
  giamua: {
    type: Number,
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
  daThanhToan: {
    type: Boolean,
    default: false,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
