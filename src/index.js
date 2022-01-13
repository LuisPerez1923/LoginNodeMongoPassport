const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');


const app = express();

//configuraciones
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000)

//Middlewares => funciones que se ejecutan antes de que pasen a las rutas
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', require('./routes/index'))

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto:", app.get('port'));
});