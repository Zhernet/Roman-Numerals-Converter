const express = require('express')
const router = express.Router()
const convertToRoman = require('./../convert').convertToRoman
const convertToNumber = require('./../convert').convertToNumber

router.post('/', function (req, res) {
  let method = req.body.method
  let result
  if (method === 'toRoman') {
    result = convertToRoman(req.body.input)
  } else if (method === 'toNumber') {
    result = convertToNumber(req.body.input)
  } else {
    result = 'invalid'  
  }  
  return res.json(result)
});

module.exports = router
