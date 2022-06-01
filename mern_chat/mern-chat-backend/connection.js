const mongoose = require('mongoose');
require('dotenv').config({ path:"./config.env" });

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        //  useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
    });

    console.log("MongoDB connected");
};

module.exports = connectDB;