const express = require('express');


// socket io no trabaja con express pero si trabaja con http 
const socketIO = require('socket.io');


//  el paquete http viene por defecto en node
const http = require('http');

const path = require('path');

const app = express();

// exprees esta basado en http asi que son tan parecidos que el app se puede mandar el app como argumento
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//  inicializamos el socket IO(input y outputs)
//  mantendra una comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});