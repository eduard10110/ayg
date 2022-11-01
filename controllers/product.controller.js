const Product = require("../models/product.model");
const fs = require('fs');
const { parse } = require('json2csv');

const createProduct = async (req, res) => {
  try {
    const {
      name,
      type,
      quantity,
      storage,
      dateOfDestribution,
      unit,
      expirationDate,
      price,
      supplier,
      dateOfEntry,
      material,
      lot
    } = req.body

    const product = await Product.create({
      name,
      type,
      quantity,
      dateOfDestribution,
      unit,
      expirationDate,
      storage,
      price,
      supplier,
      dateOfEntry,
      material,
      lot
    });
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

const getProduct = async (req, res) => {
  try {
    const  productId  = req.params.productId
    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product)

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getProducts = async (req, res) => {
  const filterConditions = {};
  const isStorageSpecified = req.query.isStorageSpecified;

  try {
    if (isStorageSpecified) {
      filterConditions.storage = isStorageSpecified === '1' ? { $ne: null } : null 
    }

    const products = await Product.find(filterConditions);
  

    if (!products) return res.status(404).json({ messege: 'Products not found' })

    res.json(products)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const  productId  = req.params.productId
    const product = await Product.findByIdAndDelete(productId)

    if (!product) return res.status(404).json({ message: 'Product not found' });

    return res.json(200, { message: "product deleted" })

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId

    const updatedProduct = {
      name: req.body.name,
      type: req.body.type,
      storage: req.body.storage,
      quantity: req.body.quantity,
      dateOfDestribution: req.body.dateOfDestribution,
      unit: req.body.unit,
      expirationDate: req.body.expirationDate,
      price: req.body.price,
      supplier: req.body.supplier,
      dateOfEntry: req.body.dateOfEntry,
      lot: req.body.lot,
      material: req.body.material
    }

    await Product.findByIdAndUpdate(productId, {$set: updatedProduct})

    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    res.json({message: "product updated"})

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const exportProducts = async (req, res) => {
  try {
    const products = await Product.find()
    const fields = ['name', 'type', 'quantity', 'unit', 'expirationDate', 'price', 'supplier', 'storage', 'dateOfEntry', 'material', 'dateOfDestribution', 'lot'];
    const opts = { fields };
    
    try {
      const csv = parse(products, opts);
      fs.writeFile("products.csv", csv, function(error){
        if (error) throw error
      })
      res.status(200)
    } catch (err) {
      console.error(err);
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  exportProducts,
}
