const { createTest,
  getTest,
  deleteTest,
  updateTest, 
  getPossibleTestsCount,
  getTests
} = require('../controllers/test.controller')


const { Router } = require('express')


const testRouter = Router()

testRouter.post('/', createTest)
testRouter.get('/:testId', getTest)
testRouter.delete('/:testId', deleteTest)
testRouter.put('/:testId', updateTest)
testRouter.post('/:testId/possible-count', getPossibleTestsCount);
testRouter.get('/', getTests)


module.exports = { testRouter }