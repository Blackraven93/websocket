import http from "http";
import WebSocket from "ws";
import SocketIO from "socket.io";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app); // node js
const wsServer = SocketIO(httpServer);

const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(process.env.PORT, handleListen);
