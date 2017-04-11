const express = require('express')
const expressGraphQL = require('express-graphql')
const bodyParser = require('body-parser')

const app = express()

const API_URI = 'http://localhost:3000/api/graphql'

app.use(bodyParser.json())

const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app
