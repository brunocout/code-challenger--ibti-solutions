const express = require("express")
const teamsRoutes = require("./teams.routes")
const cors = require("cors")
const app = express()

// Access Control
app.use(cors())

app.use(express.json())
app.use(teamsRoutes)

app.listen(process.env.PORT || 3001)