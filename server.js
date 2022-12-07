const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Database'))


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)