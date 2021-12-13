const express = require('express')
const fs = require('fs');
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/transactions', (req, res) => {
    const rawdata = fs.readFileSync('transactions.json');
    const transactions = JSON.parse(rawdata);
    res.json(transactions)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})