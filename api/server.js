const express = require("express");
const ventureRouter = require("../ventures/venture-funds-router.js");

const server = express();

server.use(express.json());

server.use('/api', ventureRouter);

server.get('/', (req, res) => {
	res.status(200).json({ api: "up" });
});

module.exports = server;