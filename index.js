const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PUBLISHABLE_KEY = "pk_test_51L4qAgKDCJiANE10DbHvVSKuGjWs70OE5mLK6SVqsyMpkGYDAM54CM3SEVkT9WMtaloaz54UBTiWiO54UPNJj6Et00fKAWQWqh"
const SECRET_KEY = "sk_test_51L4qAgKDCJiANE10hYGDVgZ6mluJl15oYjSdVSu6BM0nFW4QtCReu4YWSG73MZmsuovsblG21M22VpChGnRC7MQl003QlaG6C9"

const stripe = require('stripe')(SECRET_KEY)
const app = express()

// middleweaer
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//to access css and images 
app.use('/public', express.static('public'));

app.set("view engine", "ejs")

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.render('HOME', {
        key: PUBLISHABLE_KEY
    })
})

app.post('/payment', (req, res) => {
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Assignment_5',
        address: {
            line1: '123,eglinton edghill',
            postal_code: 'mnx12d',
            country: 'Canada'
        }
    }).then((customer) => {
        return stripe.charges.create(
            {
                amount: 1000,
                description: 'Assignment_5',
                currency: 'USD',
                customer: customer.id
            })
    }).then((charge) => {
        console.log(charge)
        res.send("Success")
    }).catch((err) => {
        res.send(err)
    })
})

app.listen(PORT, () => {
    console.log(`App is listening on Port number ${PORT}`)
})