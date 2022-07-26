const Test = require("../models/test.model");
const Product = require("../models/product.model");


const createTest = async (req, res) => {
  try {
    const {
      productQuantity,
      unit,
      quantity
    } = req.body
    const test = await Test.create({
      productQuantity,
      unit,
      quantity
    });
    res.json(test)
  } catch (error) {
    console.log("erroooooooooooooooooooooooooooooor", error)
  }
}

const getTest = async (req, res) => {
  try {
    const  testId  = req.params.testId
    const test = await Test.findById(testId)
    res.json(test)

  } catch (error) {
    console.log("error", error)
  }
}


const deleteTest = async (req, res) => {
  try {
    const  testId  = req.params.testId
    const test = await Test.findByIdAndDelete(testId)
    return res.json({ message: "test deleted" })

  } catch (error) {
    console.log("error", error)
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
    
    res.json({message: "test updated"})

  } catch (error) {
    console.log("error", error)
  }
}

const getTestQuantity = async (req, res) => {
  try {
    await Product.find(Product.quantity)

  } catch (error) {
    console.log("error", error)
  }
}

const getPossibleTestsCount = async (req, res) => {
  const {
    products,
  } = req.body;

  try {
    const existingProducts = await Promise.all(
      products.map(product => Product.findById(product.id))
    );

    const possibleCountOfTests = Math.min(...products.map((product, idx) => parseInt(existingProducts[idx].quantity / product.quantity)));

    return res.status(200).json({ count: possibleCountOfTests });
  } catch (err) {
    console.log('error -> ', err);
  }
}

module.exports = {
  createTest,
  getTest,
  deleteTest,
  updateTest,
  getTestQuantity,
  getPossibleTestsCount,
}
