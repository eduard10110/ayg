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
    res.json(product)
  } catch (error) {
    console.log("errooooooooooooooooooooooooooooor", error)
  }
}

const getProduct = async (req, res) => {
  try {
    const  productId  = req.params.productId
    const product = await Product.findById(productId)
    res.json(product)

  } catch (error) {
    console.log("error", error)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const  productId  = req.params.productId
    const product = await Product.findByIdAndDelete(productId)
    return res.json(200, { message: "product deleted" })

  } catch (error) {
    console.log("error", error)
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
    
    res.json({message: "product updated"})

  } catch (error) {
    console.log("error", error)
  }
}

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
}
