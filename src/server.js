import http from "http";
import WebSocket from "ws";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); // node js

const wss = new WebSocket.Server({ server }); // 이렇게 하면 같은 서버에서 둘다 돌릴 수 있음
// http 서버 위에 ws를 올림

const handleConnection = (socket) => {
  // front에서 전달한 socket을 파라미터로 받음
  console.log(socket);
};

wss.on("connection", handleConnection);

server.listen(process.env.PORT, handleListen);
