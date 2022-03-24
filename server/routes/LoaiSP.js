const express = require("express");
const router = express.Router();

const cate = require("../model/LoaiSP");

router.route("/").get((req, res) => {
  cate
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  cate
    .findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
