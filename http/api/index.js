const http = require('http')
const data = require('./urls.json')
const door = 3000

http.createServer((req, res) => {
    res.end(JSON.stringify(data))

}).listen(door, () => console.log(`api is running in door ${door}`))