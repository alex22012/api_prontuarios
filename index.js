const app = require('./src/config/config')()
app.listen(process.env.PORT || 8080)

app.get("/", (req, res) => {
    res.send("Oi")
})