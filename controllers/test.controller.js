const Test = require("../models/test.model");
const Product = require("../models/product.model");


const createTest = async (req, res) => {
  try {
    const {
      products,
    } = req.body
    const test = await Test.create({
      products,
    });
    res.json(test)
  } catch (error) {
    console.log(error)
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
      productQuantity: req.body.productQuantity,
      unit: req.body.unit,
      quantity: req.body.quantity
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
        _id: product.id,
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

module.exports = {
  createTest,
  getTest,
  deleteTest,
  updateTest,
  getPossibleTestsCount,
}
