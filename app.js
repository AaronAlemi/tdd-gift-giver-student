const { NotFoundError } = require('./utils/errors');

const express = require('express');
const app = express();

const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(express.json())

const router = require("./routes/gift-exchange")
app.use("/gift-exchange", router)

const bodyParser = require('body-parser')
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get("/", (req, res) => {
    res.status(200).send({ "ping": "pong" })

})

// 404 handler middleware
app.use((req, res, next) => {
    next();
    throw new NotFoundError
})

app.use((err, req, res, next) => {
    let status = err.status ? err.status : 500;
    let message = err.message ? err.message : "Something wen't wrong in the application"
    res.send({"error" : {"status" : status, "message" : message}})
})

module.exports = app 
