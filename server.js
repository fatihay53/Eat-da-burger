const express = require("express");
const orm = require( './config/orm');

const app = express();
const exphbs = require('express-handlebars');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

const PORT = process.env.PORT || 300;

// for POSTING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for HANDLEBARS paths
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', async function(req, res){
    const burger = await orm.selectAll()
  // console.log(burger)
    // return it within handlebars
    res.render('index', { burger: burger });

})

app.post('/api/create', async function(req, res){

  let input = req.body
  console.log(input)

  let result = await orm.insertOne(input)
  // console.log(result)
  res.redirect('/');

})

app.post ('/api/burger/:id',async function (req,res){
  let id = (req.params.id)
  let result = await orm.updateOne(id)
  console.log(result)
})

app.get( '/api/eaten',async function(req,res){
  let result = await orm.eatenBuger()
  
})

// app.put('/api/:id'),async function (req,res){
//   let id = (req.params.id)

// console.log(id)

// let result = await orm.updateOne(id)

// console.log(result)

// } 




app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
)