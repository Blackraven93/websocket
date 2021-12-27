const host = window.location.host;

// front와 backend가 연결 되었음
const socket = new WebSocket(`ws://${host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("Just got this : ", message, " from the server");
  console.log(message.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});

setTimeout(() => {
  console.log(socket.send("Hello from the browser!"));
}, 10000);
