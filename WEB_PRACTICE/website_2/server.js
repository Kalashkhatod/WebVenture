const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

  // ---------- ROUTES (HTML PAGES) ----------
  if (req.url === "/" || req.url === "/index") {
    return serveHTML("index.html", res);
  }

  if (req.url === "/about") {
    return serveHTML("about.html", res);
  }
  if (req.url === "/contact") {
    return serveHTML("contact.html", res);
  }
  if (req.url === "/help") {
    return serveHTML("help.html", res);
  }

  // ---------- STATIC FILES ----------
  if (req.url.startsWith("/css/")) {
    return serveStatic(req.url, "css", "text/css", res);
  }

  if (req.url.startsWith("/js/")) {
    return serveStatic(req.url, "js", "text/javascript", res);
  }

  // ---------- 404 ----------
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Page not found");
});


// ---------- HELPERS ----------
function serveHTML(fileName, res) {
  const filePath = path.join(__dirname, "pages", fileName); //__dirname = folder where server.js is
  const html = fs.readFileSync(filePath);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
}

function serveStatic(url, folder, type, res) {
  const filePath = path.join(__dirname, "public", url);
  const file = fs.readFileSync(filePath);
  res.writeHead(200, { "Content-Type": type });
  res.end(file);
}


// ---------- START SERVER ----------
server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});








