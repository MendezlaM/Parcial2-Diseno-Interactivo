const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("../router/index.js");

const server = express();

server.name = "servidor";


server.use(express.urlencoded({
    extended: true,
    limit: "50mb"
}));

server.use(express.json({
    limit: "50mb"
}));

server.use(helmet());

server.use(morgan("dev"));

server.use(cors());


server.use("/", routes);


server.use((err, req, res, next) => {

    const status = err.status || 500;

    const message = err.message || err;

    console.error(err);

    res.status(status).send(message);

});


module.exports = server;orts = server;