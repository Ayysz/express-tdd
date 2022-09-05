// memanggil enviroment yang telah kita buat di .env
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.APP_PORT || 8080;

app.use(bodyParser.json());

routes(app);

app.listen(PORT, (err) => {
    err?
        console.error(`Error on - ${err}`):
        console.log(`Server running at http://127.0.0.1:${PORT}`);
});

module.exports = {app,};