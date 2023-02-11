const {
  createTest,
  getTest,
  deleteTest,
  makeTest,
  exportTests,
  getMakedTests,
  updateTest,
  checkTestPrice,
  getPossibleTestsCountById,
  getPossibleTestsCountByName,
  exportMakedTests,
  getTests,
} = require("../controllers/test.controller");

const { Router } = require("express");

const testRouter = Router();

testRouter.post("/", createTest);
testRouter.get("/:testId", getTest);
testRouter.post("/make", getMakedTests);
testRouter.post("/:testId/check", checkTestPrice);
testRouter.post("/make/export", exportTests);
testRouter.delete("/:testId", deleteTest);
testRouter.put("/:testId", updateTest);
testRouter.post("/:testId/possible-count-by-id", getPossibleTestsCountById);
testRouter.post("/:testId/possible-count-by-name", getPossibleTestsCountByName);
testRouter.post("/maked/export", exportMakedTests);
testRouter.get("/", getTests);
testRouter.post("/make/makeTest", makeTest);

module.exports = { testRouter };
