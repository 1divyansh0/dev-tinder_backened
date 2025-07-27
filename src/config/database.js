const mongoose = require("mongoose");


const connect = async()=>{
   await  mongoose.connect("mongodb+srv://rajsharma:rajsharma12@devtinder.dkuduyg.mongodb.net/devtinder");
}
module.exports = connect;
