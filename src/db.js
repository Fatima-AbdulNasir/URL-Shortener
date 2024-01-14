const mongoose = require("mongoose");
require(`dotenv`).config();


const connectDB = async() => {
    const dbUrl ="mongodb+srv://ayesha:1234@cluster0.ltvwgvk.mongodb.net/UrlShortner?retryWrites=true&w=majority";
const connectionParams = {}
try{
    await mongoose.connect(dbUrl, connectionParams);
    console.log("Connected")
}catch (err){
console.error('Error connecting to the database:' , err)
}
}

module.exports = connectDB;