const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    cabecera:
    {
        idd: String,
        de: String,
        para: String,
        asunto: String,
        stamp: Date
    },
    headers:
    {
        contenido: String,
        adjunto: String
    }
});

module.exports = mongoose.model('Message', MessageSchema);