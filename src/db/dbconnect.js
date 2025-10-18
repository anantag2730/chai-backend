import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// import { exit } from 'node:process';

const connectDB=async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`Mongo DB is connected !! DB HOST :
            ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);
        
    }catch(error){
        console.log("MONGO DB CONNECTION ERROR: ",error)
        process.exit(1);
    }
}

export default connectDB;