const express = require('express');

const teamRouter = require('./routes/teamRoutes');
const reportRouter = require('./routes/reportRoutes');
const sportRouter = require('./routes/sportRoutes');
const matchRouter = require('./routes/matchRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/teams', teamRouter);
app.use('/api/v1/reports', reportRouter);
app.use('/api/v1/sports', sportRouter);
app.use('/api/v1/matches', matchRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;