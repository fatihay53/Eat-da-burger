const db = require('./connection')('burgers_db', 'password123')



async function insertOne(input){
  
    const result = await db.query( 'INSERT INTO burgers (burger_name,devoured) VALUES (?,?)',[input.burgerName,false] )
    console.log(result)
    return result
}

async function selectAll(){
    const burger = await db.query( "SELECT * FROM burgers where devoured=0" )

    return burger
}

async function updateOne(burgerId){
    const result = await db.query(`update burgers Set devoured = 1  where id = ${burgerId}`)
    return result
}

async function eatenBuger(){
    
    const result = await db.query(`SELECT * FROM burgers where devoured=1`)
    return result
}


module.exports = {insertOne,selectAll,updateOne,eatenBuger}


    