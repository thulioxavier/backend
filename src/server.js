require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./routers/router');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(express.json());
server.use('/static',express.static('./src/temp'))
server.use('/api', router);

server.listen(process.env.PORT, ()=>{
    console.log(`Server: ${process.env.URL}${process.env.PORT}`);
});
