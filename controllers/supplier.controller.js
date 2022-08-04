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
    res.status(500).json({ message: "something went wrong" })
  }
}

const getSupplier = async (req, res) => {
  try {
    const  supplierId  = req.params.supplierId
    const supplier = await Supplier.findById(supplierId)
    res.json(supplier)

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const deleteSupplier = async (req, res) => {
  try {
    const  supplierId  = req.params.supplierId
    const supplier = await Supplier.findByIdAndDelete(supplierId)
    return res.json({ message: "supplier deleted" })

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
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

    if (!updatedSupplier) return res.status(404).json({ message: 'Supplier not found' });
    
    res.json({message: "supplier updated"})

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}






module.exports = {
  createSupplier,
  getSupplier,
  deleteSupplier,
  updateSupplier
}