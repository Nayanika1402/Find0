const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const { errorMiddleware } = require('./middlewares/error')
const router = require('./router/routes')
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://find0.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api",router)

require('./database/connectDb');


app.listen(8080,()=>{
    console.log("Server Start At Port 8080");
});


app.use(errorMiddleware);