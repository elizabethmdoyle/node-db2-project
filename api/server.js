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

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
    })
})

module.exports = server
