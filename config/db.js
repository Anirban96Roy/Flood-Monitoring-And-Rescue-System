import mongoose from "mongoose";
import colors from 'colors';

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.url);
        console.log(`Connection to MONGODB Database: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB: ${error}`.bgRed.white);  // Corrected to use parentheses
    }
};

export default connectionDB;
