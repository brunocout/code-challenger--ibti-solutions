const express = require("express")
const teamsRoutes = require("./teams.routes")
const app = express()

// Access Control
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
})
app.use(express.json())
app.use(teamsRoutes)


app.get('/', (req, res) => {
   return res.json("hi")
})

app.listen(3001, () => {
    console.log('Server is running')
})