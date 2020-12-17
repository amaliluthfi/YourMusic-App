const express = require('express')
const Controller = require('../controller/home-login-register.js')
const routerArtist = require('./admin/artistRoutes')
const routerSong = require('./admin/songRoutes')
const router = express.Router()

router.get('/', Controller.home)
router.get('/login', Controller.login)
router.get('/register', Controller.register)

router.post('/login', Controller.loginPost)
router.post('/register', Controller.registerPost)

//UNTUK ADMIN
router.use('/admin/artist', routerArtist)
router.use('/admin/song', routerSong)


module.exports = router