const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {


        console.log(data);

        // cuando susamos el cliente.emit estamos emitiando solo al clietne qeu nos envio el mensaje
        // client.emit('enviarMensaje', data);
        //  usando el broadcast respondemos a todos los uusarios
        client.broadcast.emit('enviarMensaje', data);



        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo Salio mal'
        //     });
        // }


    });
});