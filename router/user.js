const express = require('express')
const router = express.Router()
const controller = require('../controller/user.js')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))

// 分发路由
router.get('/register', controller.handleRegisterGet);

router.get('/login', controller.handleLoginGet);

router.post('/register', controller.handleRegisterPost);

router.post('/login', controller.handleLoginPost);

router.get('/logout', controller.handleLogoutGet);

module.exports = router