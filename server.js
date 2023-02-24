const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')

const port = 3000
const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));


app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(port, () => {
    console.log(`Server is up on localhost:${port}`);
})