const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  tenloai: {
    type: String,
  },
});
const LoaiSP = mongoose.model("LoaiSP", categorySchema);
module.exports = LoaiSP;
