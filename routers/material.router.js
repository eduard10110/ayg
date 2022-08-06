const { createMaterial,
  getMaterial,
  deleteMaterial,
  updateMaterial,
  getMaterials } = require('../controllers/material.controller')


const { Router } = require('express')


const materialRouter = Router()

materialRouter.post('/', createMaterial)
materialRouter.get('/:materialId', getMaterial)
materialRouter.delete('/:materialId', deleteMaterial)
materialRouter.put('/:materialId', updateMaterial)
materialRouter.get('/', getMaterials)


module.exports = { materialRouter }