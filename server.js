const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const dashboardPath = path.join(__dirname, "dashboard-logistico.html");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/" || url.pathname === "/dashboard-logistico.html") {
    fs.readFile(dashboardPath, "utf8", (error, content) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Erro ao carregar o dashboard.");
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
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
