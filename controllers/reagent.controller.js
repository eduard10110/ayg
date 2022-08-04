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
    res.status(500).json({ message: "something went wrong" })
  }
}


const deleteReagent = async (req, res) => {
  try {
    const reagentId = req.params.reagentId
    const reagent = await Reagent.findByIdAndDelete(reagentId)
    if (!reagent) return res.status(404).json({ message: 'Reagent not found' });
    return res.json({message: "Reagent successfully deleted"}) 
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
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
    if (!reagent) return res.status(404).json({ message: 'Reagent not found' });
    res.json({message: "reagent updated"})
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

module.exports = {
  createReagent,
  deleteReagent,
  updateReagent
}
