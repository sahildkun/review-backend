

const mongoose = require('mongoose');



// Connect to MongoDB


const connectDB = async (uri) => {
    console.log("connected to mongo DB");
    return mongoose.connect(uri);
}
module.exports = connectDB;
