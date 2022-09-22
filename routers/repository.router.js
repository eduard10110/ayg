const { createRepository,
  getRepository,
  deleteRepository,
  updateRepository,
  getRepositories } = require('../controllers/repository.controller')


const { Router } = require('express')


const repositoryRouter = Router()

repositoryRouter.post('/', createRepository)
repositoryRouter.get('/:repositoryId', getRepository)
repositoryRouter.delete('/:repositoryId', deleteRepository)
repositoryRouter.put('/:repositoryId', updateRepository)
repositoryRouter.get('/', getRepositories)


module.exports = { repositoryRouter }