// import express
const express = require('express')

// create our express application object
const app = express()

// data array for question 3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

// data array for question 4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
]

// Routes
// Be polite, greet the user
app.get('/greetings/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}! Thanks for logging back in!`)
})

// Rolling the Dice
app.get('/roll/:maxRoll', (req, res) => {
    if (isNaN(req.params.maxRoll)) {
        res.send(`You must specify a number!`)
    } else {
        const diceRoll = Math.floor(Math.random() * req.params.maxRoll)
        res.send(`You rolled a ${diceRoll}!`)
    }
})

// I want THAT one!
app.get('/collectibles/:storedJunk', (req, res) => {
    if (isNaN(req.params.storedJunk)) {
        res.send(`Please choose a number!`)
    } else if (req.params.storedJunk >= collectibles.length){
        res.send(`This item is not yet in stock. Check back soon!`)
    } else {
        res.send(`So you like the ${collectibles[req.params.storedJunk].name}? For ${collectibles[req.params.storedJunk].price}, it can be yours!`)
    }
})

// STILL WORKING ON THIS
// Filter shoes by Query Parameters
app.get('/shoes', (req, res) => {
    console.log(req.query)
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const shoeType = req.query.shoeType
    res.send(`${shoes}`)
})


// listen on port3000 for requests
app.listen(3000, () => {
    console.log('Listening on port3000')
})
