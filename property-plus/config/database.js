import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    //If the database is already connected then don't connect  again
    if (connected) {
        console.log("MonogoDB is already connected...");
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log("MonogoDB is connected...");
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;