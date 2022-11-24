const express = require('express');

const teamRouter = require('./routes/teamRoutes');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/api/v1/teams', teamRouter);

module.exports = app;