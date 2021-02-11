const express = require('express');
const Message = require('../models/Message');

var router = express.Router();

// Obtener todos los mensajes
router.get('/', async (req, res) => {
    try {
        const mensajes = await Message.find();

        res.json(mensajes);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

// Nuevo mensaje
router.post('/', async (req, res) => {
    console.log('Creando nuevo mensaje');
    try {
        const mensaje = new Message({
            cabecera: {
                de: req.body.de,
                para: req.body.para,
                asunto: req.body.asunto,
                stamp: new Date()
            },
            cuerpo: {
                contenido: req.body.contenido,
                adjunto: req.body.adjunto
            }
        });

        const response = await mensaje.save();
        res.json(response);
    } catch (err) {
        res.send(err);
    }
});

function c_sort(a, b) {
    return new Date(b.cabecera.stamp).getTime() - new Date(a.cabecera.stamp).getTime();
}

// Obtener mensajes donde user es de o para
router.get('/:user', async (req, res) => {
    console.log("Buscando por usuario: " + req.params.user)
    try {
        const user = req.params.user;
        const resp = [];

        let mensajes = await Message.find();

        for (let i = 0; i < mensajes.length; ++i) {
            if (user == mensajes[i].cabecera.de ||
                user == mensajes[i].cabecera.para) {
                    console.log(mensajes[i].de + " " + mensajes[i].para);
                    resp.push(mensajes[i]);
            }
        }
        mensajes.sort(c_sort).reverse();

        res.json(resp);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
});

// Por cabeceras
router.get('/:user/cabeceras', async (req, res) => {
    try {
        const user = req.params.user;

        const mensajes = await Message.find().select({ cabecera: 1 });
        const resp = [];

        for (let i = 0; i < mensajes.length; ++i) {
            if (user == mensajes[i].cabecera.de ||
                user == mensajes[i].cabecera.para) {
                resp.push(mensajes[i]);
            }
        }
        mensajes.sort(c_sort).reverse();

        res.json(mensajes);
    } catch (err) {
        res.send(err);
    }
});

// Modificamos asunto
router.patch('/id/:mId', async (req, res) => {
    try {
        const mId = req.params.mId;
        const nuevoAsunto = req.body.asunto;

        // Obtenemos el mensaje
        let mensaje = await Message.findById(mId);
        mensaje.cabecera.asunto = nuevoAsunto;

        const response = await mensaje.save();
        res.json(response);

    } catch (err) {
        res.send(err);
    }
});

// Borramos mensaje
router.delete('/id/:mId', async (req, res) => {
    console.log("Borramos mensaje");
    try {
        const mId = req.params.mId;

        // Obtenemos el mensaje
        let mensaje = await Message.findByIdAndDelete(mId);

        res.json(mensaje);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;