import mongoose from "mongoose";

const URI=process.env.MONGODB_URI


export const connectDB=async()=>{
    try {
        const connect_database=await mongoose.connect(URI)
         console.log("Database connection successfully ✅ ")
        return connect_database
    } catch (error) {
        console.error("Database connection failed ❌")
        process.exit(1)
    }
}