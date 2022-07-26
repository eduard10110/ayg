const { createTest,
  getTest,
  deleteTest,
  updateTest, 
  getTestQuantity,
  getPossibleTestsCount
} = require('../controllers/test.controller')


const { Router } = require('express')


const testRouter = Router()

testRouter.post('/', createTest)
testRouter.get('/:testId', getTest)
testRouter.delete('/:testId', deleteTest)
testRouter.put('/:testId', updateTest)
testRouter.get('/', getTestQuantity)
testRouter.post('/possible-count', getPossibleTestsCount);


module.exports = { testRouter }