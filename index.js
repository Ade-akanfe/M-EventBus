const express = require("express")
const cors = require("cors")
const app = express()
const http = require("http");
const axios = require("axios")


app.use(express.json())
app.use(cors())


const events = []

app.post("/create-event", async (req, res) => {

    const data = req.body

    events.push(data)

    await axios.post("http://localhost:4000/accept-event", data)
    await axios.post("http://localhost:4001/accept-event", data)
    // await axios.post("http://localhost:4002/accept-event", data)

    res.send({})
})

app.get("/events", (req, res, next) => {
    res.send(events)
})


const server = http.createServer(app)





server.listen(4005, () => {
    console.log("Event Bus on port 4005")
})