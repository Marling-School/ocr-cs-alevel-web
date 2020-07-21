const express = require("express");
const bubbleSort = require("../lib/algorithms/sort/bubbleSort");
const router = express.Router();

router.get("/sort/bubble", function (req, res, next) {
  let arr = [5, 8, 2, 8];
  console.log("Raw Array", arr);
  let sorted = bubbleSort(arr, (a, b) => a - b);
  console.log("Sorted Array", sorted);

  res.send({ sorted });
});

module.exports = router;
