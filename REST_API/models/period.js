const mongoose = require("mongoose")

const PeriodSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    added: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Period", PeriodSchema)