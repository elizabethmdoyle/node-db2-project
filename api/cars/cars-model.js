const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  // SELECT * FROM CARS
  return db('cars');

}

const getById = (id) => {
  // DO YOUR MAGIC
  //SELECT * FROM CARS WHERE ID = 1 
  return db('cars').where("id", id).first()
}

const getByVin = (vin) => {
  // DO YOUR MAGIC
  //SELECT * FROM CARS WHERE ID = 1 
  return db('cars').where("vin", vin).first()
}
const create = async (car) => {
  // DO YOUR MAGIC
  //INSERT INTO CARS {vin, make, model, model, title, transmission  }, values { foo, bar}

  //destructure the values instead of return db('car').insert(car, ['id'])

  const [id] = await db('cars').insert(car)

  return getById(id)



}

module.exports = {
getAll,
getById,
getByVin,
create

}
