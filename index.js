import express from 'express' //
import { agregarProducto, obtenerProductos, borrarProducto} from './src/mysql_conector.js'
let todos


const app = express() //llamamos express como una funcion, ahora "app" es un objeto con toda la funcionalidad de express

app.listen('8000',function(){ //app.listen le dice a express, escuchame en este puerto y haz esta callback
    console.log('app start in port 8000')
})
//conf. de pug
app.set('views', './vistas')
app.set('view engine', 'pug')
//conf. archivos estaticos
app.use(express.static('./vistas')) //indicamos a la app de donde sacar los archivos
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', function(req, res){
    /*res.send('todo ok matraco')*/ //ya no queremos renderizar esto
    /*conectar()*/
    todos = obtenerProductos()
    res.render('index', {titulo:'reservas de carne', productos:todos})
})
app.get('/agregar/:nombre/:cantidad', function(req, res){
    let nombre = req.params.nombre
    let cantidad = req.params.cantidad
    agregarProducto(nombre, cantidad)
    res.redirect('/')

    console.log(nombre, cantidad)
})
app.get('/borar/:id', function(req, res){
    let id = req.params.id
    borrarProducto(id)
    res.redirect('/')
})