const express = require("express");
const orm = require( './config/orm');

const app = express();
const exphbs = require('express-handlebars');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

const PORT = process.env.PORT || 5555;

// for POSTING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('controllers'));

// for HANDLEBARS paths
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.post('/api/create', async function(req, res){
  let input = req.body
  let result = await orm.insertOne(input)
  // console.log(result)
  res.redirect('/');
})

app.get('/', async function(req, res){
    const burger = await orm.selectAll()
  // console.log(burger)
    // return it within handlebars
    res.render('index', { burger: burger });

})
app.post('/api/burger/:id', async function(req, res){
  const id =  req.params.id 
  console.log(id)
  const updateBurger = await orm.updateOne(id)
  console.log('[/ PUT] updateBurger:', updateBurger);
  res.redirect('/')
})


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
)