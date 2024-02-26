const Car = require('./cars-model');
var vinValidator = require('vin-validator');

exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  //checkCarId returns a status 404 with a { message: "car with id <car id> is not found" } if the id in req.params does not exist in the database.

  try {
    const car = await Car.getById(req.params.id);

    if(!car) {
      next({status:404,message: `car with id ${req.params.id} is not found` })
    } else {
      req.car = car
      next()
    }
  } catch(err) {
    next(err)
  }
}

exports.checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC

  //returns a status 400 with a { message: "<field name> is missing" } if any required field is missing.

 
  if(!req.body.vin) return next({
    status:400,
    message: "vin is missing"
  })
  if(!req.body.make) return next({
    status:400,
    message: "make is missing"
  })
  if(!req.body.model) return next({
    status:400,
    message: "model is missing"
  })
  if(!req.body.mileage) return next({
    status:400,
    message: "mileage is missing"
  })
  next()

}

exports.checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
  //checkVinNumberValid returns a status 400 with a { message: "vin <vin number> is invalid" } if the vin number is invalid.

  // var isValidVin = vinValidator.validate('11111111111111111'); // true

  // try {
  //   const validVin = await Car.getByVin(req.body.vin)
    
  //   if(!validVin == vinValidator.validate(validVin)) {
  //     next({ status: 400, message:`vin ${validVin} is invalid ` })
  //   } else {
  //     next()
  //   }
  // } catch (err) {
  //   next(err)
  // }

  if(vinValidator.validate(req.body.vin)){
    next()
  }else {
    next({
      status: 400,
      message: `vin ${req.body.vin} is invalid`})
  }

}

exports.checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC

  //checkVinNumberUnique returns a status 400 with a { message: "vin <vin number> already exists" } if the vin number already exists in the database.

  try {
    const number = await Car.getByVin(req.body.vin)
    
    if(!number) {
     next()
    } else {
      next({
        status:400,
        message:`vin ${req.body.vin} already exists`
      })
    }
  } catch (err) {
    next(err)
  }
}


