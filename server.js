import http from "http";

import fs from "fs";
import path from "path";
import { Server } from "socket.io";

const users = [];

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (["GET", "POST", "PUT"].includes(req.method)) {
    const filePath = path.join(process.cwd(), "./index.html");
    const rs = fs.createReadStream(filePath);
    rs.pipe(res);
  }
});
const io = new Server(server);
io.on("connection", (client) => {
  console.log("User connected");
  const find = () => users.find((el) => el.id === client.id);
  client.on("client-name", (data) => {
    data.id = client.id;
    users.push(data);
    const findUser = find();
    client.broadcast.emit("server-msg", {
      msg: `${findUser.name} - logged into the chat`,
    });
    client.emit("server-msg", {
      msg: `${findUser.name} - logged into the chat`,
    });
  });
  client.on("client-msg", (data) => {
    const findUser = find();

    client.broadcast.emit("server-msg", { msg: data.msg, name: findUser.name }); // печатать сообщения всем клиентам
    client.emit("server-msg", { msg: data.msg, name: findUser.name });
  });
  client.on("disconnect", () => {
    console.log("User disconnected");
    const findUser = find();

    client.broadcast.emit("server-msg", {
      msg: `${findUser.name} - exited the chat`,
    });
    client.emit("server-msg", {
      msg: `${findUser.name} - exited the chat`,
    });
  });
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
