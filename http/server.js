const http = require('http')
const fs = require('fs')
const path = require('path')
const door = 5000



// req = Requisição
// res = Resposta
http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname,'public',file)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html','.css','.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if (!allowed) return

    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err

            res.end(content)
        }
    )

    //     if(req.url === '/contato')
    //     return res.end('<h1> Contato<h1>')

}).listen(door, () => console.log(`Server is running in the door ${door}`))