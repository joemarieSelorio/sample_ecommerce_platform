const mongoose = require('mongoose');

const MongoDBService = require('./api/services/MongoDBService');
const ProductsSchema = require('./api/common/schemas/ProductSchema');
const productSchemaService = new MongoDBService(ProductsSchema);

var products = [
  {
      name: 'Towel', 
      image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
      quantity: 10,
  },
  {
    name: 'Tissue', 
    image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
    quantity: 10,
  },
  {
    name: 'Diapers', 
    image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
    quantity: 10,
  },
  {
    name: 'Almond Milk', 
    image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
    quantity: 10,
  },
  {
    name: 'Sandals', 
    image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
    quantity: 10,
  },
  {
    name: 'Stroller', 
    image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
    quantity: 10,
  },
  {
    name: 'Samsung Galaxy Andromeda version', 
    image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
    quantity: 10,
  },
];


async function seedDB() {
  await productSchemaService.deleteMany({});
  products.forEach(async (product) => {
    await productSchemaService.insert(product);
  });
}


module.exports = seedDB;
