const Reagent = require("../models/reagent.model")

const createReagent = async (req, res) => {
  try {
      const {
        name,
        quantity
      } = req.body

      const reagent = await Reagent.create({
        name,
        quantity
      })

      res.json(reagent)
  } catch (error) {
    console.log("erooooooooooooooooooooooooor". error)
  }
}


const deleteReagent = async (req, res) => {
  try {
    const reagentId = req.params.reagentId
    const reagent = await Reagent.findByIdAndDelete(reagentId)
    return res.json({message: "Reagent successfully deleted"}) 
  } catch (error) {
    console.log("erooooooooooooooooooooooooor", error)
  }
}


const updateReagent = async (req, res) => {
  try {
    const reagentId = req.params.reagentId

    const updatedReagent = {
      name: req.body.name,
      quantity: req.body.quantity
    }

    await Reagent.findByIdAndUpdate(reagentId, {$set: updatedReagent})
    res.json({message: "reagent updated"})
  } catch (error) {
    console.log("erooooooooooooooooooooooooor", error)
  }
}

module.exports = {
  createReagent,
  deleteReagent,
  updateReagent
}
