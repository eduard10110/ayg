const Repository = require("../models/repository.model")

const createRepository = async (req, res) => {
  try {
      const {
        name,
        product
      } = req.body

      const repository = await Repository.create({
        name,
        product
      })

      res.json(repository)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


const deleteRepository = async (req, res) => {
  try {
    const repositoryId = req.params.repositoryId
    const repository = await Repository.findByIdAndDelete(repositoryId)
    if (!repository) return res.status(404).json({ message: 'repository not found' });
    return res.json({message: "repository successfully deleted"}) 
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


const updateRepository = async (req, res) => {
  try {
    const repositoryId = req.params.repositoryId

    const updatedRepository = {
      name: req.body.name,
      product: req.body.quantity
    }

    await Repository.findByIdAndUpdate(repositoryId, {$set: updatedRepository})
    if (!repository) return res.status(404).json({ message: 'repository not found' });
    res.json({message: "repository updated"})
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getRepository = async (req, res) => {
  try {
    const  repositoryId  = req.params.repositoryId
    const repository = await Repository.findById(repositoryId);

    if (!repository) return res.status(404).json({ message: 'repository not found' });

    res.json(repository)

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

const getRepositories = async (req, res) => {
  try {
    const repositories = await Repository.find();

    if (!repositories) return res.status(404).json({ messege: 'repositories not found' })

    res.json(repositories)
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

module.exports = {
  createRepository,
  deleteRepository,
  updateRepository,
  getRepositories,
  getRepository
}