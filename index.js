const app = require('./src/config/config')()
app.listen(8080, () => console.log("Hello, world"))

app.get("/", (req, res) => {
    res.send("Oi")
})