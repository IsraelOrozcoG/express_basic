//Usando objeto express
const express = require('express')
// App de Express
const app = express()
//Puerto en que vamos a ver nuestra app: localhots:3000
const port = 3000

// path inicial, responderá a la url localhost:3000

app.get('/',(req,res)=> {
    res.send('Hello World')
})

//Repondiento texto
//localhost:3000/launchx

app.get('/launchx', (req,res) => {
    res.send('Bienvenidos a launchx')
})


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})