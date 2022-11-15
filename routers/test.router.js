const { createTest,
  getTest,
  deleteTest,
  makeTest,
  exportTests,
  getMakedTests,
  updateTest, 
  getPossibleTestsCountById,
  getPossibleTestsCountByName,
  exportMakedTests,
  getTests
} = require('../controllers/test.controller')


const { Router } = require('express')


const testRouter = Router()

testRouter.post('/', createTest)
testRouter.get('/:testId', getTest)
testRouter.get('/make', getMakedTests)  
testRouter.post('/export', exportTests); 
testRouter.delete('/:testId', deleteTest)
testRouter.put('/:testId', updateTest)
testRouter.post('/:testId/possible-count', getPossibleTestsCountById);
testRouter.post('/:testId/possible-count-by-name', getPossibleTestsCountByName);
testRouter.post('/export/maked', exportMakedTests); 
testRouter.get('/', getTests)
testRouter.post('/make/makeTest', makeTest)


module.exports = { testRouter }