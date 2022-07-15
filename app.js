const express = require('express');
const {
  notFoundHandler,
} = require('./middlewares');
const { productRouter } = require('./routers/product.router');
const { supplierRouter } = require('./routers/supplier.router');
const { materialRouter } = require('./routers/material.router');

const app = express();

app.use(express.json());

app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/material', materialRouter)

app.use(notFoundHandler);

module.exports = {
  app,
};