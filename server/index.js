const express = require("express")
const cors = require("cors")
const app = express()
const data = require("./data.json")

app.use(express.static("public"))
app.use(express.json())
app.use(cors())

const PORT = 8888

app.get("/api/article/:id", (req, res) => {
    const id = req.params.id
    let article = {}
    data.forEach((item) => {
        if (item.id == id) {
            article = item
            return
        }
    })
    res.json(article)
})

app.get("/api/articles", (req, res) => {
    res.json(data)
})
app.listen(PORT, () => console.log("Server runs on port:", PORT))
