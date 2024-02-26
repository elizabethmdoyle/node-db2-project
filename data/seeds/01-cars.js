// STRETCH

const cars = [
    { vin: '32NTNT3932NNGNG80' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '9U040ANGLDFNLK49A' , make: 'Ford' , model: "Focus" , mileage: 48386, title: 'true' , transmission: 'true'},
    { vin: '94IRMFJ90A4W9CKTN' , make: 'Chrysler' , model: "200" , mileage: 163000, title: 'true' , transmission: 'true'},
 
]


exports.seed = function (knex, Promise) {
    return knex('cars').truncate()
      .then(function () {
        return knex('accounts').insert(cars);
      });
  };