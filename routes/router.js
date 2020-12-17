const express = require('express')
const Controller = require('../controller/home-login-register.js')
const routerArtist = require('./admin/artistRoutes')
const routerSong = require('./admin/songRoutes')
const router = express.Router()

const isLogin =  (req, res, next) => {
    if (req.session.userId) {
        next()
    }
    else {
        res.redirect('/login')
    }
}

const isAdmin = (req, res, next) => {
    if (req.session.username == 'Administrator') {
        next()
    }
    else {
        res.redirect('/login')
    }
}

router.get('/', isLogin, Controller.home)
router.get('/login', Controller.login)
router.get('/register', Controller.register)
router.get('/logout', Controller.logout)

router.post('/login',  Controller.loginPost)
router.post('/register',  Controller.registerPost)

//UNTUK ADMIN
router.use('/admin/artist', isAdmin, routerArtist)
router.use('/admin/song', isAdmin, routerSong)


module.exports = router