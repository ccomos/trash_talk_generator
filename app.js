//include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_talk')
const app = express()
const port = 3000
//extend custom logic to handlebars
const hb = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    keep: function (v1, v2) { return (v1 === v2) }
  }
})

//set template engine
app.engine('handlebars', hb.engine)
app.set('view engine', 'handlebars')

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const trashTalk = generateTalk(req.body)
  const listener = (req.body).listener
  res.render('index', { listener: listener, trashTalk: trashTalk })
})

//starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})