const http = require("http");
const port  = 3000



let server = http.createServer((req, res) => {
    if(req.url === "/home" && req.method === 'GET'){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify({name: "mohammed arif", email: "arif@gmial.com"}))
    }else{
        res.writeHead(404, {"Content-Type":"application/json"})
        res.end(JSON.stringify({message: "url path is not defined"}))
    }
})

server.listen(port, () => console.log(`http://localhost:${port}`))