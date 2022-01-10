const mongoose = require('mongoose');
const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log("CONEXION CORRECTA");
    } catch (error) {
        throw new Error("Error con la conexion de la BD");
    }
}
module.exports = {
    dbConnection
}