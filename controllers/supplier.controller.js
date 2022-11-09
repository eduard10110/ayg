const Supplier = require("../models/supplier.model");

const createSupplier = async (req, res) => {
  try {
    const {
      name,
        brand,
        unit
    } = req.body
    const supplier = await Supplier.create({
      name,
      brand,
      unit
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
      brand: req.body.brand,
      unit: req.body.unit
    }

    await Supplier.findByIdAndUpdate(supplierId, {$set: updatedSupplier})

    if (!updatedSupplier) return res.status(404).json({ message: 'Supplier not found' });
    
    res.json({message: "supplier updated"})

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();

    if (!suppliers) return res.status(404).json({ messege: 'suppliers not found' })

    res.json(suppliers)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}






module.exports = {
  createSupplier,
  getSupplier,
  deleteSupplier,
  updateSupplier,
  getSuppliers
}