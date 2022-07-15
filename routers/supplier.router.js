const { createSupplier,
  getSupplier,
  deleteSupplier,
  updateSupplier } = require('../controllers/supplier.controller')


const { Router } = require('express')


const supplierRouter = Router()

supplierRouter.post('/', createSupplier)
supplierRouter.get('/:supplierId', getSupplier)
supplierRouter.delete('/:supplierId', deleteSupplier)
supplierRouter.put('/:supplierId', updateSupplier)


module.exports = { supplierRouter }