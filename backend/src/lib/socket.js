import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

const userSocketMap = {};

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

function emitOnlineUsers() {
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (!userId) {
    console.error("No userId provided");
    return;
  }

  console.log("User ID:", userId);

  userSocketMap[userId] = socket.id;
  console.log("User socket mapping updated:", userSocketMap);

  emitOnlineUsers();

  socket.on("newMessage", (message) => {
    const receiverSocketId = getReceiverSocketId(message.receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", message);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);

    if (userId) {
      delete userSocketMap[userId];

      emitOnlineUsers();

      console.log(
        "User socket mapping updated after disconnect:",
        userSocketMap
      );
    }
  });
});

export { io, app, server };
