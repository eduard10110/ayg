const { createConsumable, deleteConsumable, updateConsumable, getConsumables, getConsumable } = require('../controllers/consumable.controller')

const { Router } = require('express')

const consumableRouter = Router() 

consumableRouter.post('/', createConsumable)
consumableRouter.delete('/:consumableId', deleteConsumable)
consumableRouter.put('/:consumableId', updateConsumable)
consumableRouter.get('/', getConsumables)
consumableRouter.get('/:consumableId', getConsumable)

module.exports = { consumableRouter }