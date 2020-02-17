const { merge } = require("lodash")
const userResolver= require('./Users')

module.exports = merge(userResolver)
