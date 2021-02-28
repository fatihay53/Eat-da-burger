const db = require('./connection')('burgers_db', 'password123')



async function insertOne(input){
  
    const result = await db.query( 'INSERT INTO burgers (burger_name,devoured) VALUES (?,?)',[input.burgerName,false] )
   
    return result
}

async function selectAll(){
    const burger = await db.query( "SELECT * FROM burgers" )

    return burger
}

async function updateOne(id){
    let result = await  db.query( `UPDATE burgers SET devoured = true WHERE id = ${id}`)
   
   let result2 = await db.query( `select * from burgers where devoured = true`)
   return result2
   
}

// async function eatenBuger(){
    
//     const result = await db.query(`SELECT * FROM burgers where devoured =true`)
//     return result
// }


module.exports = {insertOne,selectAll,updateOne}


    