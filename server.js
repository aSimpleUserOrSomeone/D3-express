const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')

const port = 3000
const app = express()

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'layout',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
    res.render('index.hbs')
})

app.listen(port, () => {
    console.log(`Server is up on localhost:${port}`);
})