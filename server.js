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

    response.send("HelloJSApp - Fetch1.4\n" + "\n");
    
});

express.post("/upload", (request, response) =>
{

    response.send("HelloJSApp - Upload1.4\n" + JSON.stringify(request.body) + "\n");
    
});

var port = process.env.port || process.env.PORT || 6002;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
