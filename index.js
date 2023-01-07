import http from "http";

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("SomeCustomHeaders", "text/html");
  res.writeHead(200, {
    SomeCustomHeaders: "value test",
  });
  res.end("<h1>Start server</h1>");
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
