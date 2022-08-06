const { createSupplier,
  getSupplier,
  deleteSupplier,
  updateSupplier,
  getSuppliers } = require('../controllers/supplier.controller')


const { Router } = require('express')


const supplierRouter = Router()

supplierRouter.post('/', createSupplier)
supplierRouter.get('/:supplierId', getSupplier)
supplierRouter.delete('/:supplierId', deleteSupplier)
supplierRouter.put('/:supplierId', updateSupplier)
supplierRouter.get('/', getSuppliers)


module.exports = { supplierRouter }