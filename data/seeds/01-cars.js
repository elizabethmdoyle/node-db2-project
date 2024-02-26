// STRETCH

const cars = [
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},
    { vin: '32NTNT3932NNGNG803NIOW2' , make: 'Chevy' , model: "Silverado" , mileage: 134000, title: 'true' , transmission: 'true'},

]


exports.seed = function (knex, Promise) {
    return knex('cars').truncate()
      .then(function () {
        return knex('accounts').insert(cars);
      });
  };