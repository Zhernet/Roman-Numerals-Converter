"use strict";

const express = require('express')
const router = express.Router()
const path = require('path')
const convert = require('./../convert').convert

router.get('/', (req, res, next) => {
  res.sendFile(path.join(
    __dirname, '..', '..', 'client', 'views', 'Main.html'))
})

router.post('/', function (req, res) {
  let result = convert(req.body.input)
  return res.json(result)
})

module.exports = router