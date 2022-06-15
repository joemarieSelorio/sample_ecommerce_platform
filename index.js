const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const seedDB = require("./seed");
const log = require('./api/utilities/LoggerUtil');
const productRouter = require('./api/routers/ProductRouter');
const cartRouter = require('./api/routers/CartRouter');
const mongoDBUtil = require('./api/utilities/MongoDBUtil');
const HttpSuccess = require('./api/responses/HttpSuccess');
const ValidationError = require('./api/responses/ValidationError');
const HttpError = require('./api/responses/HttpError');

const app = express();

const TAG = '[app]';

// Connect to Mongo DB
mongoDBUtil.connect()
    .catch((error) => {
      log.error(`${TAG} ${error}`);
      process.exit(1);
    });

// Parse incoming request bodies
app.use(bodyParser.json());

app.use(cors());

// Routers
app.use('/products', productRouter);
app.use('/carts', cartRouter);

// Success middleware
app.use((req, res, next) => {
  if (res.locals.respObj && res.locals.respObj instanceof HttpSuccess) {
    return res.status(res.locals.respObj.status).json(res.locals.respObj);
  }
  return next();
});


seedDB().then(()=> {
  log.info(`${TAG} [app] Done importing product seeds`);
}).catch((error) => {
  log.error(`${TAG} [app] Failed to import product seeds`);
  process.exit(1);
});


// Error middleware
app.use((error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(error.status).json(error);
  } else if (error instanceof AssertionError) {
    const errorObj = new ValidationError(error.message);
    return res.status(errorObj.status).json(errorObj);
  } else if (error instanceof HttpError) {
    const errorObj = new HttpError();
    return res.status(errorObj.status).json(errorObj);
  } else {
    return res.status(error.status).json(error);
  }
});


const port = process.env.PORT || 5000;

app.listen(port, async () => {
  log.info(`Listening in port: ${port}`);
});


