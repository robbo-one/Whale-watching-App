const path = require('path')
const express = require('express')

const whaleRoutes = require('./routes/whales')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/whales', whaleRoutes)

module.exports = server
