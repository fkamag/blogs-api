const express = require('express');
const { LoginRouter, UserRouter, CategoryRouter, PostRouter } = require('./routers');

// ...

const app = express();

app.use(express.json());

app.use('/login', LoginRouter);

app.use('/user', UserRouter);

app.use('/categories', CategoryRouter);

app.use('/post', PostRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
