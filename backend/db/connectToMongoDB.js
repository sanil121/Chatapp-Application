import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToMongoDB = async() => {
    try{
     const mongoUri = process.env.MONGO_DB_URI || process.env.MONGO_DB_URL;
     if (!mongoUri) {
        throw new Error("Missing MongoDB connection string. Set MONGO_DB_URI (or MONGO_DB_URL) in .env");
     }
     await mongoose.connect(mongoUri);
     console.log("connected to MongoDB")
    }catch(error){
        console.log("Error connecting to MongoDB", error.message);
        // Bubble up so server startup / callers can handle it.
        throw error;
    }
}
 
export default  connectToMongoDB;
