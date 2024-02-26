const Car = require('./cars-model');
const db = require('../../data/db-config');
var vinValidator = require('vin-validator');

exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  //checkCarId returns a status 404 with a { message: "car with id <car id> is not found" } if the id in req.params does not exist in the database.

  try {
    const car = await Car.getById(req.params.id);

    if(!car) {
      next({status: 404, message: "car with id <car id> is not found" })
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

  const error = {status:400}
  const {vin, make, model, mileage, title, transmission } = req.body;



}

exports.checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
  //checkVinNumberValid returns a status 400 with a { message: "vin <vin number> is invalid" } if the vin number is invalid.

  // var isValidVin = vinValidator.validate('11111111111111111'); // true

  try {
    const validVin = await('cars').where('vin', req.body.vin.trim()).first()

    if(validVin == vinValidator.validate(validVin)) {
      next({ status: 400, message:"vin <vin number> is invalid" })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

exports.checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC

  //checkVinNumberUnique returns a status 400 with a { message: "vin <vin number> already exists" } if the vin number already exists in the database.

  try {
    const number = await('cars').where('vin', req.body.vin.trim()).first()

    if(number) {
      next({ status: 400, message:"vin <vin number> already exists" })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}


