const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        /* Conexión a la BD */
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('BD Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hr de inicializar la BD');
    }
}

module.exports = {
    dbConnection
}