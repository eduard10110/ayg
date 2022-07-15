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
    console.log("errooooooooooooooooooooooooooooor", error)
  }
}

const getMaterial = async (req, res) => {
  try {
    const  materialId  = req.params.materialId
    const material = await Material.findById(materialId)
    res.json(material)

  } catch (error) {
    console.log("error", error)
  }
}

const deleteMaterial = async (req, res) => {
  try {
    const  materialId  = req.params.materialId
    const material = await Material.findByIdAndDelete(materialId)
    return res.json(200, { message: "material deleted" })

  } catch (error) {
    console.log("error", error)
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
    
    res.json({message: "material updated"})

  } catch (error) {
    console.log("error", error)
  }
}






module.exports = {
  createMaterial,
  getMaterial,
  deleteMaterial,
  updateMaterial
}
