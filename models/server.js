const cors = require('cors')
const express = require('express');
const { dbConnection } = require('../DB/config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //CONEXION A LA BASE DE DATOS
        this.conectarDB();
        //middlewares
        this.middlewares();
        //rutas de mi aplicacion

        this.routes();
    }
    async conectarDB() {
        await dbConnection();
    }
    middlewares() {
        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        // direcctorio publico
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuario'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en ", this.port)
        });
    }
}
module.exports = Server;