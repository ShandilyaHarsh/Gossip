require('dotenv').config({path: "./config.env"});
const express = require('express');
const app = express();
const PORT = 4000;
const http = require('http');
const server = http.createServer(app);
const cookieParser = require("cookie-parser");
const cors = require('cors');
const googleLoginRouter = require("./oauth2/googleAuthRouters")

// Connect to database
require('./mongo-connect');

// const addRouter = require('./routes/add');
// const showRouter = require('./routes/show');

// app.use('/add', addRouter);
// app.use('/show', showRouter);

// enabling CORS
app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use(googleLoginRouter);
app.use('/post', require('./routes/postRouter'));

app.get('*', (req, res) => {
    res.send('This is index page');
});

server.listen(PORT, function() {
    console.log("Server is running on port = " + PORT);
});