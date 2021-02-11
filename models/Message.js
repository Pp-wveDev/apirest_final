const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    cabecera:
    {
        de: String,
        para: String,
        asunto: String,
        stamp: Date
    },
    cuerpo:
    {
        contenido: String,
        adjunto: String
    }
});

module.exports = mongoose.model('Message', MessageSchema);