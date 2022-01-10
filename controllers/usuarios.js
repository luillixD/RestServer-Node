const { request, response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');


const usuariosGet = async(req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true }
    const [total, usuario] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(desde)
        .limit(Number(limite))
    ]);
    res.json({
        total,
        usuario
    })
}
const usuariosPut = async(req, res) => {
    const id = req.params.id;
    const { _id, password, google, correo, ...resto } = req.body;

    //validar coontra bd
    if (password) {
        //encriptar contrasena
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.json(usuario);
}
const usuariosPost = async(req, res = response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //encriptar contrasena
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    //guardar en la bd


    await usuario.save();
    res.json({
        ok: true,
        msg: 'post API - controllers',
        usuario
    })
}
const usuariosDelete = async(req, res) => {
    const { id } = req.params;
    //borrado fisico
    // const usuario = await Usuario.findByIdAndDelete(id);
    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false })

    res.json(usuario)
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}