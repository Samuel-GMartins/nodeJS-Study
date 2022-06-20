const { read } = require('fs')
const http = require('http')
const door = 5000

// res = Requisição
// res = Resposta
http.createServer((req,res) =>{
    res.write("funfando Legal")
    res.end()
}).listen(door, () => console.log(`Server is running in the door ${door}`))