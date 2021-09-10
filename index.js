const connectDB = require("./db/mongoose")
const cors = require("cors")
const express = require("express")
const path = require("path")

const app = express()
const port = 8000

connectDB()

// middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'build')))

// All the APIs would be accessible through the endpoint starting with "/api"
app.use("/api", require("./routes/loan"))

// This is added to send files for the production build.
app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(process.env.PORT || port, () => {
    console.log('Server is up on port ' + process.env.PORT || port)
})