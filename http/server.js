const http = require('http')
const fs = require('fs')
const path = require('path')
const door = 5000



// req = Requisição
// res = Resposta
http.createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname,'public',file)

    res.end('cheguei')
    //     if(req.url === '/')
    fs.readFile(
        path.join(__dirname, 'public',file),
        (err, content) => {
            if (err) throw err

            res.end(content)
        }
    )

    //     if(req.url === '/contato')
    //     return res.end('<h1> Contato<h1>')

}).listen(door, () => console.log(`Server is running in the door ${door}`))