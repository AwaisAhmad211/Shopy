import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log("Database Connected")
    } catch (error) {
        console.error(error)
    }
}

export default connectDB