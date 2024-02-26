// DO YOUR MAGIC
const express = require('express');
const router = express.Router();
const Car = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');


router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try{
        const car = await Car.getById(req.params.id)
        res.json(car)
    } catch (err) {
        next(err)
    }
   
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {
        const newCar = await Car.create({
               vin: req.body.vin.trim(), 
                make: req.body.make.trim(), 
                model: req.body.model.trim(), 
                mileage: req.body.mileage.trim(), 
                title: req.body.title.trim(), 
                transmission: req.body.make.trim()
              
        })
        res.status(201).json(newCar)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;