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

// Filter shoes by Query Parameters
app.get('/shoes', (req, res) => {
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const shoeType = req.query.shoeType

    let displayShoes

    if (minPrice) {
        console.log("minPrice")
        displayShoes = shoes.filter((shoe) => shoe.price >= minPrice)
        return res.send(displayShoes)
    } else {
        res.send(shoes)
    }

    if (maxPrice) {
        console.log("maxPrice")
        displayShoes = shoes.filter((shoe) => shoe.price <= maxPrice)
        return res.send(displayShoes)
    } else {
        res.send(shoes)
    }

    if (shoeType) {
        console.log("shoeType")
        displayShoes = shoes.filter((shoe) => shoe.type === shoeType)
        return res.send(displayShoes)
    } else {
        res.send(shoes)
    }
})



// listen on port3000 for requests
app.listen(3000, () => {
    console.log('Listening on port3000')
})


// Graveyard

// Explanation:
// Import Express: Require the express module.
// Create App: Create an instance of the Express application.
// GET Route: Define a GET route for /users.
// Access Query Parameters: Access the query parameters using req.query. In this example, we are accessing age and location.
// Filter Data: Filter the users array based on the provided query parameters.
// Send Response: Send the filtered users data as a JSON response.
// Example Usage:
// Get all users: http://localhost:3000/users
// Filter by age: http://localhost:3000/users?age=25
// Filter by location: http://localhost:3000/users?location=NY
// Filter by both: http://localhost:3000/users?age=25&location=NY