const express = require("express")

const server = express()

// DO YOUR MAGIC
const carsRouter = require('./cars/cars-router');

server.use(express.json());


server.use('/api/cars', carsRouter);

server.use('*', (req, res)=> {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

module.exports = server
