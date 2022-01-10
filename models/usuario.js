const { Schema, model } = require('mongoose');

const UsuarioShema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    correo: {
        type: String,
        require: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'La contrasena es necesario']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        require: true,
        // emun: ['ADMIN_ROL', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})
UsuarioShema.methods.toJSON = function() {
    const { __v, password, ...usuario } = this.toObject();
    return usuario;
}

//se pone'Usuario' por que mongoose le pone la s a usuarios
module.exports = model('Usuario', UsuarioShema);