import formatDate from './formatDate'

function loopThroughPeriod(dateToCompare, obj) {
    return e => {
        const from = new Date(e.from)
        const to = new Date(e.to)
        let loop = new Date(from)

        while (loop <= to) {
            const date = new Date(loop)

            if (formatDate(date) === dateToCompare) {
                obj.price = Number(e.price)
            }

            let newDate1 = loop.setDate(loop.getDate() + 1)
            loop = new Date(newDate1)
        }
    }
}

export default loopThroughPeriod