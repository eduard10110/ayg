const Test = require("../models/test.model");
const Product = require("../models/product.model");


const createTest = async (req, res) => {
  try {
    const {
      products,
      dateOfEntry,
      name,
      type,
      deviceName
    } = req.body
    const test = await Test.create({
      products,
      dateOfEntry,
      name,
      type,
      deviceName
    });
    res.json(test)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getTest = async (req, res) => {
  try {
    const  testId  = req.params.testId
    const test = await Test.findById(testId)
    if (!test) return res.status(404).json({ message: 'test not found' });
    res.json(test)

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getTests = async (req, res) => {
  try {
    const tests = await Test.find();

    if (!tests) return res.status(404).json({ messege: 'tests not found' })

    res.json(tests)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


const deleteTest = async (req, res) => {
  try {
    const  testId  = req.params.testId
    const test = await Test.findByIdAndDelete(testId)
    if (!test) return res.status(404).json({ message: 'test not found' });
    return res.json({ message: "test deleted" })

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const updateTest = async (req, res) => {
  try {
    const testId = req.params.testId

    const updatedTest = {
      products: req.body.products,
      dateOfEntry: req.body.dateOfEntry,
      name: req.body.name,
      type: req.body.type
    }

    await Test.findByIdAndUpdate(testId, {$set: updatedTest})

    if (!test) return res.status(404).json({ message: 'test not found' });
    
    res.json({message: "test updated"})

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getPossibleTestsCount = async (req, res) => {
  const {
    expirationDate,
  } = req.body;

  const { testId } = req.params
  try {
    const test = await Test.findById(testId)
    const existingQuantities = (await Promise.all(
      test.products.map(product => Product.findOne({
        name: product.name,
        expirationDate: { $gte: expirationDate }
      }))
    )).filter(product => product != null);
  
    if (existingQuantities.length != test.products.length) return res.status(500).json({ message: 'Not enough products' });

    const possibleCountOfTests = Math.min(...test.products.map((product, idx) => parseInt(existingQuantities[idx].quantity / product.quantity)));

    return res.status(200).json({ count: possibleCountOfTests });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const makeTest = async (req, res) => {
  const testId = req.params.testid;
  const {
  expirationDate
  } = req.body

  try {
    const test = await Test.findByIdAndUpdate(testId, {$set: {'isMaked': true }});
    const products = test.products;

    await Promise.all(products.map(product => {
      return Product.findByIdAndUpdate(product.id, { $inc: { 'quantity': -product.quantity } });
    }));

    res.status(200).json({ message: 'Success' });
  } catch (e) {
    res.status(500).json({ message: 'Failed' });
  }
} 

const getMakedTests = async (req, res) => {
  try {
    const tests = await Test.find({isMaked: true});

    if (!tests) return res.status(404).json({ messege: 'tests not found' })

    res.json(tests)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


module.exports = {
  createTest,
  getTest,
  getMakedTests,
  deleteTest,
  makeTest,
  updateTest,
  getPossibleTestsCount,
  getTests
}
