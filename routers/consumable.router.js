const { createConsumable, deleteConsumable, updateConsumable } = require('../controllers/consumable.controller')

const { Router } = require('express')

const consumableRouter = Router() 

consumableRouter.post('/', createConsumable)
consumableRouter.delete('/:consumableId', deleteConsumable)
consumableRouter.put('/:consumableId', updateConsumable)

module.exports = { consumableRouter }