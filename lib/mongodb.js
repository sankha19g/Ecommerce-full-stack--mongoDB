import mongoose from "mongoose";

let isConnected = false;

const connectMongoDB = async () => {
    if (isConnected) return;

    // readyState: 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
    if (mongoose.connection.readyState === 1) {
        isConnected = true;
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log("MongoDB Connected to the Ecommerce App");
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default connectMongoDB;