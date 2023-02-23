import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, 'src')))

app.get('*', (req,res) => {
    res.send("Data from the server!")
})

app.listen(3000, () => {
    console.log("Server is up!");
})