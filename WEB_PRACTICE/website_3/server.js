const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    // Serve HTML from pages folder
    if (req.method === "GET" && req.url === "/") {
        const filePath = path.join(__dirname, "pages", "index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Cannot load HTML");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }

    // Serve static JS files from public folder
    else if (req.method === "GET" && req.url.startsWith("/public")) {
        const filePath = path.join(__dirname, req.url);

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("File not found");
            } else {
                res.writeHead(200, { "Content-Type": "application/javascript" });
                res.end(data);
            }
        });
    }

    // Handle POST request
    else if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", chunk => body += chunk.toString());

        req.on("end", () => {
            const data = JSON.parse(body);
            console.log("Received:", data);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                success: true,
                message: "Login received"
            }));
        });
    }

    // error 404
    else{
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
