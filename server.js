const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000

// MongoDB connection
mongoose
    .connect('mongodb://localhost:27017/IOB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err))

// Define Mongoose schemas
const balanceSchema = new mongoose.Schema({
    accountNumber: { type: String, required: true, unique: true },
    availableBalance: Number,
    currentBalance: Number,
    monthlyAvgBalance: Number,
})

const transactionSchema = new mongoose.Schema({
    accountNumber: { type: String, required: true },
    date: Date,
    narration: String,
    drCr: String,
    amount: Number,
})

// Create Mongoose models
const Balance = mongoose.model('Balance', balanceSchema)
const Transaction = mongoose.model('Transaction', transactionSchema)

app.use(express.static('src'))
app.use(bodyParser.json())

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'iob.html'))
})

// Route to serve check-bal.html
app.get('/checkbalance', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'assets', 'check-bal.html'))
})

// Route to serve last-trans.html
app.get('/lasttransaction', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'assets', 'last-trans.html'))
})

// Route to save balance
app.post('/save-balance', async (req, res) => {
    const {
        accountNumber,
        availableBalance,
        currentBalance,
        monthlyAvgBalance,
    } = req.body

    try {
        // Update or create the balance entry in MongoDB
        await Balance.findOneAndUpdate(
            { accountNumber },
            { availableBalance, currentBalance, monthlyAvgBalance },
            { upsert: true, new: true }
        )
        res.send('Balance saved successfully')
    } catch (err) {
        console.error('Error saving balance:', err)
        res.status(500).send('Error saving balance')
    }
})

// Route to get balance by account number
app.get('/get-balance/:accountNumber', async (req, res) => {
    const accountNumber = req.params.accountNumber
    try {
        const balance = await Balance.findOne({ accountNumber })
        if (balance) {
            res.json(balance)
        } else {
            res.status(404).send('Account not found')
        }
    } catch (err) {
        res.status(500).send('Error retrieving balance')
    }
})

// Route to save transaction
app.post('/save-transaction', async (req, res) => {
    const { accountNumber, date, narration, drCr, amount } = req.body

    try {
        const transaction = new Transaction({
            accountNumber,
            date,
            narration,
            drCr,
            amount,
        })
        await transaction.save()
        res.send('Transaction saved successfully')
    } catch (err) {
        res.status(500).send('Error saving transaction')
    }
})

// Route to get transactions by account number
app.get('/get-transactions/:accountNumber', async (req, res) => {
    const accountNumber = req.params.accountNumber
    try {
        const accountTransactions = await Transaction.find({ accountNumber })
        res.json(accountTransactions)
    } catch (err) {
        res.status(500).send('Error retrieving transactions')
    }
})

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
