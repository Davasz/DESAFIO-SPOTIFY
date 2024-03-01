// Imports
import express from 'express'
import dotenv from 'dotenv'
import Contracts from './models/Contracts.js'
import cors from 'cors'

// Dotenv start
dotenv.config()

// Sequelize models sync
Contracts.sync()

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
// Return all contracts
app.get('/', async (req, res) => {
    try {
        const response = await Contracts.findAll()
        res.status(200).send(response)
    } catch (error) {
        res.status(501).send({ message: 'Erro ao buscar contratos' + error })
    }
})

// Store contract
app.post('/', async (req, res) => {
    try {
        const contract = req.body
        const response = await Contracts.create(contract)
        res.status(200).send(response)
    } catch (error) {
        res.status(501).send({ message: 'Erro ao registrar contrato: ' + error});
    }
})

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
})
