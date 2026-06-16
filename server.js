const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const publicFiles = {
  "/": { file: "index.html", type: "text/html; charset=utf-8" },
  "/index.html": { file: "index.html", type: "text/html; charset=utf-8" },
  "/style.css": { file: "style.css", type: "text/css; charset=utf-8" },
  "/script.js": { file: "script.js", type: "text/javascript; charset=utf-8" }
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const asset = publicFiles[url.pathname];

  if (asset) {
    fs.readFile(path.join(__dirname, asset.file), "utf8", (error, content) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Erro ao carregar o arquivo.");
        return;
      }

      res.writeHead(200, {
        "Content-Type": asset.type,
        "Cache-Control": "no-store"
      });
      res.end(content);
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Pagina nao encontrada.");
});

server.listen(port, () => {
  console.log(`Dashboard logistico rodando em http://localhost:${port}`);
});
