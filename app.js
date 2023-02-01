const express = require('express');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');

const userRouter = require("./routes/user.routes");

const app = express();
const port = 1004

// socket
const http = createServer(app);

const router = require('./routes');

/* router */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', [userRouter]);


http.listen(port, () => {
    console.log(`${port} 포트가 열렸습니다!`);
});