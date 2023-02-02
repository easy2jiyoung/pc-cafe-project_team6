const express = require('express');
const cookieParser = require('cookie-parser');
const { createServer } = require('http');
const path = require('path')

// const userRouter = require("./routes/user.routes");

const app = express();
const port = 1004

// socket
const http = createServer(app);

const router = require('./routes');

/* ejs setting*/
app.set('view engine','ejs');
app.set('views', './views')
app.use(express.static(path.join(__dirname,'views')));

/* router */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

app.get('/',(req,res) => {
    res.render('login');
})

http.listen(port, () => {
    console.log(`${port} 포트가 열렸습니다!`);
});
