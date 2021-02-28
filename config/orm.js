const db = require('./connection')('burgers_db', 'password123')



const insertOne = async (input) => {

    const result = await db.query('INSERT INTO burgers (burger_name,devoured) VALUES (?,?)', [input.burgerName, false])

    return result
}

const selectAll = async () => {
    const burger = await db.query("SELECT * FROM burgers")

    return burger
}

const updateOne = async (id) => {
    let result = await db.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`)

    let result2 = await db.query(`select * from burgers where devoured = true`)
    return result2

}
module.exports = { insertOne, selectAll, updateOne }