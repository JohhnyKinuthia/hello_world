var http = require("http")
var server = http.createServer(function (_, res){
    res.writeHead(200);
    res.end("Hello, Wadau!");
});

server.listen(3000);