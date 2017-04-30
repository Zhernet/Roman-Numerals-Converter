const express = require('express')
const router = express.Router()
const convert = require('./../convert').convert

router.post('/', function (req, res) {
  let result = convert(req.body.input)
  return res.json(result)
})

module.exports = router
