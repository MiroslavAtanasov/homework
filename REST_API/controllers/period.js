const models = require('../models/period')
const config = require('../config/config')
const { bikeRentingAlgorithm } = require('../utils/BikesRentingAlgorithm')

module.exports = {
    getAllPeriods: async (req, res) => {
        try {
            const periods = await models.find()
            res.send(periods)
        } catch {
            res.status(500).send("Error")
        }
    },
    addPeriod: async (req, res) => {
        const { from, to, price } = req.body
        const today = new Date()
        const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

        try {
            const period = await models.create({ from, to, price, added: date, })
            return res.send(period)
        } catch (err) {
            return res.status(500).send(err)
        }
    },
    updatePeriod: async (req, res) => {
        const { id, from, to, price } = req.body

        try {
            const editedPeriod = await models.findByIdAndUpdate(id, { from, to, price })
            return res.send(editedPeriod)
        } catch (err) {
            return res.status(500).send(err)
        }
    },
    deletePeriod: async (req, res) => {
        try {
            await models.findByIdAndDelete(req.body.id)
            return res.send('period is successfully deleted')
        } catch (err) {
            return res.status(500).send(err)
        }
    },
    totalPrice: async (req, res) => {
        const { startDate, endDate } = req.body
        const defaultPrice = Number(config.defaultPrice)
        const periods = await models.find()

        return bikeRentingAlgorithm(startDate, endDate, defaultPrice, periods)
    },
}