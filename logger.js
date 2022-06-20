const eventEmitter = require("events")
const fs = require("fs") // File Sistem para gravar o arquivo
const path = require ('path') // path para pegar o caminho 

const emitter = new eventEmitter()

emitter.on('log',(message) => {
    fs.appendFile(path.join(__dirname,'log.txt'),message,err => {
        if (err) throw err
    })
})


function log(message){
    emitter.emit('log',message)
}

module.exports = log
