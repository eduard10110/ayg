const express = require('express');
const {
  notFoundHandler, internalServerErrorHandler,
} = require('./middlewares');
const { productRouter } = require('./routers/product.router');
const { supplierRouter } = require('./routers/supplier.router');
const { materialRouter } = require('./routers/material.router');
const { reagentRouter } = require('./routers/reagent.router');
const { testRouter } = require('./routers/test.router');
const { consumableRouter } = require('./routers/consumable.router');

const app = express();

app.use(express.json());

app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/material', materialRouter)
app.use('/reagent', reagentRouter)
app.use('/test', testRouter)
app.use('/consumable', consumableRouter)

app.use(notFoundHandler);
app.use(internalServerErrorHandler);

module.exports = {
  app,
};