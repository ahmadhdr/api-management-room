const router = require('express').Router()

router.get('/',(req,res) => {
    res.status(200).send('connected to order')
})

module.exports = router