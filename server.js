/*jshint esversion: 6 */

const Http = require("http");
const Express = require("./node_modules/express");
const BodyParser = require("./node_modules/body-parser");

let express = Express();
let server = Http.createServer(express);

express.use(BodyParser.json
({
    
}));

express.use(BodyParser.urlencoded
({
    
    extended: true

}));

express.get("/fetch", (request, response) =>
{

    response.send("HelloJSApp - Fetch\n" + "\n");
    
});

express.post("/upload", (request, response) =>
{

    response.send("HelloJSApp - Upload\n" + JSON.stringify(request.body) + "\n");
    
});

var port = process.env.port || process.env.PORT || 6001;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
