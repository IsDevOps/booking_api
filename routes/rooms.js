const express = require('express')
const Router = express.Router()

Router.get('/', (req, res)=>{
    res.send("Rooms Routed")
})
module.exports = Router
