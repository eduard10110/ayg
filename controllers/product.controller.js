const Product = require("../models/product.model");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      type,
      quantity,
      unit,
      expirationDate,
      price,
      supplier,
      dateOfEntry,
      material
    } = req.body
    const product = await Product.create({
      name,
      type,
      quantity,
      unit,
      expirationDate,
      price,
      supplier,
      dateOfEntry,
      material
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
      quantity: req.body.quantity,
      unit: req.body.unit,
      expirationDate: req.body.expirationDate,
      price: req.body.price,
      supplier: req.body.supplier,
      dateOfEntry: req.body.dateOfEntry,
      material: req.body.material
    }

    await Product.findByIdAndUpdate(productId, {$set: updatedProduct})

    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    res.json({message: "product updated"})

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
}
