const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
const postRoute = require('./routes/posts');
var PORT = process.env.PORT || 8000;


dotenv.config();

app.use(cors());

mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(express.json());

app.use('/api', postRoute);

app.get('/', (req, res) => {
    res.send('we are on home');
});
app.listen(PORT);