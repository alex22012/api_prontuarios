const express = require("express")
const cors = require("cors")
const UserRoute = require("../routes/User")

module.exports = () => {
    const app = express()
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    app.use(cors())
    app.use(UserRoute)
    return app
}