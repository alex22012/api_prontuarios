const app = require('./src/config/config')()
app.listen(process.env.PORT || 3000)

app.get("/", (req, res) => {
    res.send("Oi")
})