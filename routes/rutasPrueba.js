const express = require('express');

var router = express.Router();

router.get('/', async (req, res) => {
    res.send('<h1>Working!</h1>');
});

module.exports = router;