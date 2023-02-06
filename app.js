const express = require("express");
const cookieParser = require("cookie-parser");
const { createServer } = require("http");
const socketIo = require("socket.io"); // SocketIO 모듈 불러오기
const path = require("path");

// const userRouter = require("./routes/user.routes");

const app = express();
const port = 1004;

// socket
const http = createServer(app);
const io = socketIo(http);

// socket connect event handling
io.on("connection", (sock) => {
    console.log("새로운 소켓이 연결됐어요!");
  
    sock.on("BUY", (data) => {
      const emitData = {
        ...data,
        date: new Date().toISOString(),
      }
      io.emit("BUY_GOODS", emitData);
    });
  
    sock.on("disconnect", () => {
      console.log(sock.id, "연결이 끊어졌어요!");
    });
  });


/* define router */
const router = require("./routes");
const ejsRouter = require("./routes/ejs.routes");

/* router */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

/* ejs setting*/
app.use(ejsRouter);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname + "/views")));

http.listen(port, () => {
    console.log(`${port} 포트가 열렸습니다!`);
})
