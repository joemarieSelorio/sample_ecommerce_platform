const mongoose = require('mongoose');

const MongoDBService = require('./api/services/MongoDBService');
const ProductsSchema = require('./api/common/schemas/ProductSchema');
const CartSchema = require('./api/common/schemas/CartSchema');
const productSchemaService = new MongoDBService(ProductsSchema);
const cartSchemaService = new MongoDBService(CartSchema);

const products = [
  {
    id: 1,
    name: 'Towel', 
    image: 'https://img.freepik.com/free-psd/pile-towels-white_176382-1916.jpg?t=st=1655210545~exp=1655211145~hmac=34810af83270619d932e9ed30f01bc7506008006e3c986038506ed0c1d5fa11c',
    quantity: 10,
    price: 1000,
  },
  {
    id: 2,
    name: 'Tissue', 
    image: 'https://img.freepik.com/free-psd/facial-tissue-box-mockup_439185-1819.jpg',
    quantity: 10,
    price: 1000,
  },
  {
    id: 3,
    name: 'Diapers', 
    image: 'https://img.freepik.com/free-photo/reusable-diapers-two-color-background-close-up_185193-68378.jpg',
    quantity: 10,
    price: 1000,
  },
  {
    id: 4,
    name: 'Sandals', 
    image: 'https://img.freepik.com/free-psd/baby-shoes-mockup_1332-4909.jpg',
    quantity: 10,
    price: 1000,
  },
  {
    id: 5 ,
    name: 'Stroller', 
    image: 'https://img.freepik.com/free-psd/baby-pram-design_1310-674.jpg',
    quantity: 10,
    price: 1000,
  },
];

const cart = {
  id: 1,
  products: [],
};


async function seedDB() {
  await cartSchemaService.deleteMany({});
  await productSchemaService.deleteMany({});
  await cartSchemaService.insert(cart);
  products.forEach(async (product) => {
    await productSchemaService.insert(product);
  });
}


module.exports = seedDB;
