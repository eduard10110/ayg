const express = require("express");
const {
  notFoundHandler,
  internalServerErrorHandler,
} = require("./middlewares");
const { productRouter } = require("./routers/product.router");
const { supplierRouter } = require("./routers/supplier.router");
const { materialRouter } = require("./routers/material.router");
const { reagentRouter } = require("./routers/reagent.router");
const { testRouter } = require("./routers/test.router");
const { consumableRouter } = require("./routers/consumable.router");
const { repositoryRouter } = require("./routers/repository.router");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.join(__dirname, "reports")));

app.use("/product", productRouter);
app.use("/supplier", supplierRouter);
app.use("/material", materialRouter);
app.use("/reagent", reagentRouter);
app.use("/test", testRouter);
app.use("/consumable", consumableRouter);
app.use("/repository", repositoryRouter);

app.use(notFoundHandler);
app.use(internalServerErrorHandler);

module.exports = {
  app,
};
