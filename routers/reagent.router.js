const { createReagent, deleteReagent, updateReagent } = require('../controllers/reagent.controller')

const { Router } = require('express')

const reagentRouter = Router() 

reagentRouter.post('/', createReagent)
reagentRouter.delete('/:reagentId', deleteReagent)
reagentRouter.put('/:reagentId', updateReagent)

module.exports = { reagentRouter }