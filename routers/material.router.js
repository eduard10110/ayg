const { createMaterial,
  getMaterial,
  deleteMaterial,
  updateMaterial } = require('../controllers/material.controller')


const { Router } = require('express')


const materialRouter = Router()

materialRouter.post('/', createMaterial)
materialRouter.get('/:materialId', getMaterial)
materialRouter.delete('/:materialId', deleteMaterial)
materialRouter.put('/:materialId', updateMaterial)


module.exports = { materialRouter }