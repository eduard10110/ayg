const Material = require("../models/material.model");

const createMaterial = async (req, res) => {
  try {
    const {
      name,
        type,
        quantity,
        unit,
        expirationDate,
        price,
        supplier,
        dateOfEntry
    } = req.body
    const material = await Material.create({
      name,
      type,
      quantity,
      unit,
      expirationDate,
      price,
      supplier,
      dateOfEntry
    });
    res.json(material)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getMaterial = async (req, res) => {
  try {
    const  materialId  = req.params.materialId
    const material = await Material.findById(materialId)
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material)

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const deleteMaterial = async (req, res) => {
  try {
    const  materialId  = req.params.materialId

    const material = await Material.findByIdAndDelete(materialId)

    if (!material) return res.status(404).json({ message: 'Material not found' });
    
    res.json({ message: "material deleted" })

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const updateMaterial = async (req, res) => {
  try {
    const materialId = req.params.materialId

    const updatedMaterial = {
      name: req.body.name,
      type: req.body.type,
      quantity: req.body.quantity,
      unit: req.body.unit,
      expirationDate: req.body.expirationDate,
      price: req.body.price,
      supplier: req.body.supplier,
      dateOfEntry: req.body.dateOfEntry,
    }

    await Material.findByIdAndUpdate(materialId, {$set: updatedMaterial})

    if (!material) return res.status(404).json({ message: 'Material not found' });
    
    res.json({message: "material updated"})

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}






module.exports = {
  createMaterial,
  getMaterial,
  deleteMaterial,
  updateMaterial
}
