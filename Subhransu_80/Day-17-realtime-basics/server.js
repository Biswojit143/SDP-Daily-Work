import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected");

  // send message every 3 seconds
  const interval = setInterval(() => {
    socket.emit("message", {
      text: "Live update at " + new Date().toLocaleTimeString(),
    });
  }, 3000);

  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("User disconnected");
  });
});

httpServer.listen(5000, () => {
  console.log("Socket server running on port 5000");
});