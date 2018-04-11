var express = require('express')
    bodyParser = require('body-parser')
    app = express()
    massive = require("massive")
    config = require('./config.js')
    cors = require('cors')
    session = require('express-session')
    path=require('path')


var app = module.exports = express();

var app =  module.exports = express();
app.use(express.static(__dirname+'/build'))
app.use(bodyParser.json());
app.use(cors())
app.use(session({
    secret: config.server.secret,
    resave: false,
    saveUninitialized: false
}))
