const express = require('express')
const router = require('./routes/router.js')
const session = require('express-session')
const app = express()
const port = 3000

app.use(session({
      secret: 'terserah',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false}
}))

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use('/', router)

app.listen(port, () => {
      console.log(`connected to ${port}`);
})