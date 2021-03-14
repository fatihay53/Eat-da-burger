var express = require('express');
var router = express.Router()
const orm = require("../config/orm");



router.get('/', async (req, res)=>{
    const burger = await orm.selectAll()
  // console.log(burger)
    // return it within handlebars
    res.render('index', { burger: burger });

})


router.post('/api/create', async (req, res)=>{
    let input = req.body
    let result = await orm.insertOne(input)
    // console.log(result)
    res.redirect('/');
  })
  

  router.post('/api/burger/:id', async (req, res)=>{
    const id =  req.params.id 
  
    const updateBurger = await orm.updateOne(id)
  
    res.redirect('/')
  })

  
  module.exports = router;