const express = require('express');
const router = express.Router();
var convertToRoman = require('./../convert').convertToRoman;

router.post('/', function (req, res) {
  let result = convertToRoman(req.body.input)
  return res.json(result)
});

module.exports = router;
