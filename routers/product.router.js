const {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductsByStorage,
  getProducts,
  exportProducts,
} = require("../controllers/product.controller");

const { Router } = require("express");

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/export", exportProducts);
productRouter.get("/:productId", getProduct);
productRouter.delete("/:productId", deleteProduct);
productRouter.put("/:productId", updateProduct);
productRouter.get("/", getProductsByStorage);
productRouter.get("/all", getProducts);

module.exports = { productRouter };
