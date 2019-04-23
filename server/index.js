const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', require('./apis/user'));

app.listen(9000, () => console.log('Server listening on port 9000'));