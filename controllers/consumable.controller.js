const Consumable = require("../models/consumable.model")

const createConsumable = async (req, res) => {
  try {
      const {
        name,
        quantity
      } = req.body

      const consumable = await Consumable.create({
        name,
        quantity
      })

      res.status(200).json(consumable)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


const deleteConsumable = async (req, res) => {
  try {
    const consumableId = req.params.consumableId;

    const consumable = await Consumable.findByIdAndDelete(consumableId);

    if (!consumable) return res.status(404).json({ message: 'Consumable not found' });

    res.json({ message: 'Consumable deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


const updateConsumable = async (req, res) => {
  try {
    const consumableId = req.params.consumableId

    const consumableData = {
      name: req.body.name,
      quantity: req.body.quantity
    }

    const updatedConsumable = await Consumable.findByIdAndUpdate(consumableId, {$set: consumableData})

    if (!updatedConsumable) return res.status(404).json({ message: 'Consumable not found' });

    res.json({ message: "Consumable updated successfully" })
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

module.exports = {
  createConsumable,
  deleteConsumable,
  updateConsumable
}
