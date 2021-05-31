const sortPeriodsByAddedDate = (a, b) => new Date(a.added) - new Date(b.added)

function formatDate(date) {
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)

    return `${date.getFullYear()}-${month}-${day}`
}

function loopThroughPeriod(dateToCompare, obj) {
    return e => {
        const from = new Date(e.from)
        const to = new Date(e.to)
        let loop = new Date(from)

        while (loop <= to) {
            const date = new Date(loop)

            if (formatDate(date) === dateToCompare) {
                obj.price = Number(e.price_per_day)
            }

            let newDate1 = loop.setDate(loop.getDate() + 1)
            loop = new Date(newDate1)
        }
    }
}

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

console.log(bikeRentingAlgorithm('2020-01-01', '2020-01-15', 5, [
    { price_per_day: 2, from: "2020-01-01", to: "2020-01-04", added: "2019-06-01" },
    { price_per_day: 60, from: "2020-01-03", to: "2020-01-08", added: "2019-06-02" },
    { price_per_day: 15, from: "2020-01-05", to: "2020-01-06", added: "2019-06-01" },
    { price_per_day: 150, from: "2020-01-08", to: "2020-01-15", added: "2019-06-15" },
]))