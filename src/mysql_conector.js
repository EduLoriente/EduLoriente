//importamos mysql
import mysql from 'mysql'
let todos
//creamos conexion
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'carne'
})

const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('estas in bro')
    })
}

const agregarProducto = (nombre, cantidad) => {
    const sql = `INSERT INTO carne_congelada (id, nombre, cantidad) VALUES (${null}, "${nombre}", ${cantidad})`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerProductos = ()=> {
    const sql = 'SELECT * FROM carne_congelada'
    conector.query(sql, function(err, result, filed){
        todos = result
    })
    return todos
}

const borrarProducto = id => {
    const sql = `DELETE FROM carne_congelada where id=${id}`
    conector.query(sql)
}

export {agregarProducto, obtenerProductos, borrarProducto}