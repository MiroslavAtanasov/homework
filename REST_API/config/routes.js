const periodRouter = require('../routes/period')

module.exports = (app) => {
    app.use('/', periodRouter)
}