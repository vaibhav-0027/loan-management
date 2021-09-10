const express = require("express")
const Loan = require("../../models/loan")
const router = express.Router()
const auth = require("../../middleware/auth")

// Endpoint to create a new loan entry in the database.
router.post('/create-loan', auth, async (req, res) => {
    try {
        const info = req.body

        // Checking various parameters before adding them to the database.
        if(info.name.trim().length === 0) {
            return res.status(500).send("Name cannot be empty")
        }

        if(info.address.trim().length === 0) {
            return res.status(500).send("Address cannot be empty")
        }

        if(info.contact.length !== 10) {
            return res.status(500).send("Invalid mobile number")
        }

        if(info.amount < 100000) {
            return res.status(500).send("Invalid loan amount")
        }

        if(info.emi === 0) {
            return res.status(500).send("Invalid EMI amount")
        }

        const loan = new Loan(info)
        await loan.save()
        res.status(201).send(loan)

    } catch (error) {
        res.status(400).send(error || "Something went wrong!")
    }
})

// Endpoint to fetch all the loan request for a particular user.
router.get('/fetch-loan', auth, async (req, res) => {
    try {
        const email = req.header("user_id")
        const applications = await Loan.find({ email })
        res.send(applications)

    } catch (error) {
        res.status(400).send(error || "Something went wrong!")
    }
})

module.exports = router