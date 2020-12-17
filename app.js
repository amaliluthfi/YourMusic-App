const express = require('express')
const app = express()
const router = require('./routes/router')
const port = 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended}))

app.use('/', router)

app.listen(port, () => {
      console.log(`connected to ${port}`);
})