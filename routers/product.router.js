const { createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  exportProducts,
} = require('../controllers/product.controller')


const { Router } = require('express')


const productRouter = Router()

productRouter.post('/', createProduct)
productRouter.get('/export', exportProducts);
productRouter.get('/:productId', getProduct)
productRouter.delete('/:productId', deleteProduct)
productRouter.put('/:productId', updateProduct)
productRouter.get('/', getProducts);


module.exports = { productRouter }