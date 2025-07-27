const express = require("express");
const app = express();
const connect = require("./config/database");
const bcrypt = require("bcrypt");
const {validate} = require("../utils/validations")
const jwt = require("jsonwebtoken");
const {auth} = require("../middleware/auth");
const user = require("./Models/user");
const cookies = require("cookie-parser");
const { isAbaRouting } = require("validator");
const authrouters = require("./routes/auth2");
const profilerouter = require("./routes/profile")
const reqrouters = require("./routes/request")
const reviewrequest = require("./routes/review");
const reqrecive = require("./routes/reqrecieved");
const getrouter = require("./routes/get");
const feedrouter = require("./routes/feed");
const cors = require("cors");
const refresh = require("./routes/refresh");
const connectrouter = require("./routes/connections");

app.use(cors({
  origin: "http://localhost:5173", // Replace with your React frontend URL
  credentials: true
}));
app.use(express.json());
app.use(cookies());



app.use("/",authrouters);
app.use("/",profilerouter);
app.use("/",reqrouters);
app.use("/",reviewrequest)
app.use("/",reqrecive);
app.use("/",getrouter);
app.use("/",feedrouter)
app.use("/",refresh)
app.use("/",connectrouter)


connect().then(()=>{
  console.log("Database Connection Established!");
  app.listen(300,()=>{
    console.log("hy! server is created!")
})
}).then((err)=>{
  console.log(err);
})

