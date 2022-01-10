const { Schema, model } = require('mongoose');

const RoleShema = Schema({
    rol: {
        type: String,
        required: [true, "El role es obligatorio"]
    }
});
module.exports = model('Role', RoleShema);