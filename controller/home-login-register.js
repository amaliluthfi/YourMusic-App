const {Song, Artist, User} = require('../models')

class Controller {

    static home(req, res){
        res.send('home')
    }
    static login(req, res){
        res.send('form login')
    }
    static loginPost(req, res){
        
    }
    static register(req, res){
        res.send('fomr register')
    }
    static registerPost(req, res){

    }
}

module.exports = Controller