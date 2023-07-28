// const path = require('path')
// const express = require('express')

import path from 'path'
import express from 'express'
import test from './views/test'

const app = express() //,
          // DIST_DIR = __dirname,
          // HTML_FILE = path.join(DIST_DIR,'index.html')
const port = 9000

app.use(express.static('assets'))
app.get('/', (req, res) => {
  const response = test();
   res.send(response)
  // res.send(add(1,2))
  // res.sendFile(HTML_FILE)
  // hello()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})