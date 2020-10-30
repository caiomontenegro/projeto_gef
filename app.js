const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoutes);
app.use(adminRoutes);

app.use((req, res) => {
    res.status(404).send('<h1> 404 Page not Found </h1>')
})

app.listen(3000);