const Test = require("../models/test.model");
const Product = require("../models/product.model");
const fs = require('fs');
const { parse } = require('json2csv');

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

const getPossibleTestsCountById = async (req, res) => {
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

const getPossibleTestsCountByName = async (req, res) => {
  const {
    expirationDate,
  } = req.body;

  const { testId } = req.params
  try {
    const test = await Test.findById(testId)
    const existingQuantities = (await Promise.all(
      test.products.map(product => Product.find({
        name: product.name,
        expirationDate: { $gte: expirationDate },
        $group: { _id: product.name, totalQuantity: { $sum: "$quantity" } }
      }))
    )).filter(product => product != null);

  
    if (existingQuantities.length != test.products.length) return res.status(500).json({ message: 'Not enough products' });

    const possibleCountOfTests = Math.min(...test.products.map((product, idx) => parseInt(existingQuantities[idx].totalQuantity / product.quantity)));

    return res.status(200).json({ count: possibleCountOfTests });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const makeTest = async (req, res) => {
  try {
    const {
      products,
      name,
      type,
      deviceName,
      dateOfEntry
    } = req.body

    await Promise.all(products.map(product => {
      return Product.findByIdAndUpdate(product.id, { $inc: { 'quantity': -product.quantity } });
    }));
    const test = await Test.create({
      products,
      dateOfEntry,
      name,
      type,
      deviceName,
      isMaked: true
    });

    res.status(200).json({ message: 'Success' });
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Failed' });
  }
} 

const getMakedTests = async (req, res) => {
  try {
    const tests = await Test.find({isMaked: {$eq: true}});

    if (!tests) return res.status(404).json({ messege: 'tests not found' })

    res.json(tests)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const exportTests = async (req, res) => {
  try {
    const tests = await Test.find()
    const fields = ['name' ,'products', 'id', 'dateOfEntry', 'type', 'deviceName']; 
    const opts = { fields };
    
    try {
      const csv = parse(tests, opts);
      fs.writeFile("tests.csv", csv, function(error){
        if (error) throw error
      })
      res.status(200).json({ message: 'Success' });
    } catch (err) {
      res.status(500).json({ message: "something went wrong" })
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const exportMakedTests = async (req, res) => {
  try {
    const tests = await Test.find({isMaked: {$eq: true}})
    const fields = ['name' ,'products', 'id', 'dateOfEntry', 'type', 'deviceName']; 
    const opts = { fields };
    
    try {
      const csv = parse(tests, opts);
      fs.writeFile("tests.csv", csv, function(error){
        if (error) throw error
      })
      res.status(200).json({ message: 'Success' });
    } catch (err) {
      res.status(500).json({ message: "something went wrong" })
    }
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
  exportTests,
  updateTest,
  getPossibleTestsCountById,
  getPossibleTestsCountByName,
  exportMakedTests,
  getTests
}

