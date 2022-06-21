// import GiftExchange from '../models/gift-exchange'

const express = require('express')

const router = express.Router()



router.post('/pairs', (req, res, next) => {
    res.status(200).send({"names":"gift"})
})

router.post('/traditional', (req, res, next) => {
    res.status(200).send({"names":"gift"})
})

module.exports = router;