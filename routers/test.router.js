const { createTest,
  getTest,
  deleteTest,
  makeTest,
  getMakedTests,
  updateTest, 
  getPossibleTestsCount,
  getTests
} = require('../controllers/test.controller')


const { Router } = require('express')


const testRouter = Router()

testRouter.post('/', createTest)
testRouter.get('/:testId', getTest)
testRouter.get('/make', getMakedTests)   
testRouter.delete('/:testId', deleteTest)
testRouter.put('/:testId', updateTest)
testRouter.post('/:testId/possible-count', getPossibleTestsCount);
testRouter.get('/', getTests)
testRouter.post('/make/:testid', makeTest)


module.exports = { testRouter }