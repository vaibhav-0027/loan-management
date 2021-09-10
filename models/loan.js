const mongoose = require("mongoose")

// Schema used for storing all the loan information.
const loanSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    contact: {
        type: String,
    },
    email: {
        type: String,
    },
    amount: {
        type: Number,
    },
    emi: {
        type: Number
    },
    startDate: {
        type: mongoose.Schema.Types.Date,
    },
    endDate: {
        type: mongoose.Schema.Types.Date,
    },
}, {
    timestamps: true
})

const Loan = mongoose.model('Loan', loanSchema)

module.exports = Loan