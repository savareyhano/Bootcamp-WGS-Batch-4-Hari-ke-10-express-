const express = require('express')
const app = express()
const port = 3000

// const read = (path, res) => {
//     res.sendFile(path, {root: __dirname})
// }

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname})
})

app.get('/product/:id', (req,res)=>{
    res.send('product id : ' + req.params.id + '<br></br>' 
    + 'category id : ' + req.query.idCat)
})

app.use('/',(req, res) => {
    res.status(404)
    res.send('404: Page not found!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})