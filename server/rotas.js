const router = require('express').Router()
const types = require('./controllers/types')

router.get('/site',types.getHtml)

router.get('/json',types.getJSON)

module.exports = router