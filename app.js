const express = require("express")


const app = express()

app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname})
})


const port = 4000
app.listen(port,()=>console.log(`starting on server: http://localhost:${port}`))