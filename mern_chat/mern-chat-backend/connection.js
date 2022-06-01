// const mongoose = require('mongoose');
// require('dotenv').config();

// // mongodb+srv://prep5253:<password>@cluster0.bsitdwq.mongodb.net/?retryWrites=true&w=majority

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.bsitdwq.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=>{
//     console.log('connected to mongodb');

// })

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