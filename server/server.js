const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const sanPhamRoute = require("./routes/SanPham");
const cateRoute = require("./routes/LoaiSP");
const userRoute = require("./routes/User");
const orderRoute = require("./routes/Order");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri)
  .then(() => console.log("Kết nối db thành công"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use("/sanpham", sanPhamRoute);
app.use("/categories", cateRoute);
app.use("/user", userRoute);
app.use("/order", orderRoute);
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server đang chạy trên port: ${port}`);
});
