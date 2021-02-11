const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Middlewares
app.use(express.json());

// DB Connection
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true,
     useUnifiedTopology: true},
    () => {
        console.log('Connected to db!');
});

// Start listening
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('Listening on port: ' + port);
});

// Import Routes
const rutasMensaje = require('./routes/rutasMensaje');
app.use('/messages', rutasMensaje);