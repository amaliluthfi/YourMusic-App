const express = require('express')
const app = express()
const router = require('./routes/router.js')
const port = 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.use('/', router)

app.listen(port, () => {
      console.log(`connected to ${port}`);
})