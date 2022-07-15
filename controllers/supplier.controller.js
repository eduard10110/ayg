const Supplier = require("../models/supplier.model");

const createSupplier = async (req, res) => {
  try {
    const {
      name,
        brand
    } = req.body
    const supplier = await Supplier.create({
      name,
      brand
    });
    res.json(supplier)
  } catch (error) {
    console.log("erroooooooooooooooooooooooooooooor", error)
  }
}

const getSupplier = async (req, res) => {
  try {
    const  supplierId  = req.params.supplierId
    const supplier = await Supplier.findById(supplierId)
    res.json(supplier)

  } catch (error) {
    console.log("error", error)
  }
}

const deleteSupplier = async (req, res) => {
  try {
    const  supplierId  = req.params.supplierId
    const supplier = await Supplier.findByIdAndDelete(supplierId)
    return res.json({ message: "supplier deleted" })

  } catch (error) {
    console.log("error", error)
  }
}

const updateSupplier = async (req, res) => {
  try {
    const supplierId = req.params.supplierId

    const updatedSupplier = {
      name: req.body.name,
      brand: req.body.brand
    }

    await Supplier.findByIdAndUpdate(supplierId, {$set: updatedSupplier})
    
    res.json({message: "supplier updated"})

  } catch (error) {
    console.log("error", error)
  }
}






module.exports = {
  createSupplier,
  getSupplier,
  deleteSupplier,
  updateSupplier
}