const { request, response } = require('express')

const usuriosGet = (req = request, res = response) => {
    const { q, nombre = 'No name' } = req.query;
    res.json({
        ok: true,
        msg: 'get API - controllers',
        q,
        nombre
    })
}
const usuriosPut = (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: 'put API - controllers',
        id
    })
}
const usuriosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        ok: true,
        msg: 'post API - controllers',
        nombre,
        edad
    })
}
const usuriosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'Delete API - controllers'
    })
}
module.exports = {
    usuriosGet,
    usuriosPut,
    usuriosPost,
    usuriosDelete
}