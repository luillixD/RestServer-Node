const Role = require('../models/role');
const Usuario = require('../models/usuario');

const rolValido = async(rol = '') => {
    const existeRole = await Role.findOne({ rol });
    if (!existeRole) {
        throw new Error(`El rol ${rol} no es valido`);
    }
}
const existeEmail = async(correo = '') => {
    //verificar si el correo existe
    const existEmail = await Usuario.findOne({ correo });
    if (existEmail) {
        throw new Error(`El correo ${correo} ya existe una cuenta vinculada a este correo`);
    }
}
const existeUsuarioID = async(id = '') => {
    //verificar si el correo existe
    const existeId = await Usuario.findById(id);
    if (!existeId) {
        throw new Error(`El id ingresado no es valido`);
    }
}
module.exports = {
    rolValido,
    existeEmail,
    existeUsuarioID
}