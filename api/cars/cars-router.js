// DO YOUR MAGIC
const express = require('express');
const router = express.Router();
const Car = require('./cars-model');
const { checkCarId, , checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');


router.get('/', (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.get('/:id', (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.use(err, req, res, next) => {
    res.status(err.status || 500).JSON({
        message: err.message
    })
}

module.exports = router;