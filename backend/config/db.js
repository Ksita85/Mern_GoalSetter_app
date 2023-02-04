const mongoose = require('mongoose');

//change mongo_url to mongo_uri to access cloud db

const connectDb = async () => {
    mongoose.set('strictQuery',false);
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Mongo db connected: ${conn.connection.host}`.cyan.underline);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;