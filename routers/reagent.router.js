const { createReagent, deleteReagent, updateReagent, getReagents, getReagent } = require('../controllers/reagent.controller')

const { Router } = require('express')

const reagentRouter = Router() 

reagentRouter.post('/', createReagent)
reagentRouter.delete('/:reagentId', deleteReagent)
reagentRouter.put('/:reagentId', updateReagent)
reagentRouter.get('/', getReagents)
reagentRouter.get('/:reagentId', getReagent)

module.exports = { reagentRouter }