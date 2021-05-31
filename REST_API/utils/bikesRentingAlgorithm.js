const { formatDate } = require('./formatDate')
const { loopThroughPeriod } = require('./loopThroughPeriod')

const sortPeriodsByAddedDate = (a, b) => new Date(a.added) - new Date(b.added)

function bikeRentingAlgorithm(startDate, endDate, defaultPrice, periods) {
    const start = new Date(startDate)
    const end = new Date(endDate)
    let loop = new Date(start)
    let totalPrice = 0

    while (loop <= end) {
        const date = new Date(loop)
        let obj = { date: formatDate(date), price: null }

        periods
            .sort(sortPeriodsByAddedDate)
            .map(loopThroughPeriod(formatDate(date), obj))

        obj.price ? totalPrice += obj.price : totalPrice += defaultPrice
        let newDate = loop.setDate(loop.getDate() + 1)
        loop = new Date(newDate)
    }

    return totalPrice
}

module.exports = { bikeRentingAlgorithm }