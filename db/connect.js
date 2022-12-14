const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


const connectDB = () => {
    console.log("db connected");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;

