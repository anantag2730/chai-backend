// require('.dotenv').config({path:'./env'})
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./db/dbconnect.js";



console.log("MONGODB URL",process.env.MONGODB_URI)
connectDB();



/*
const app=express();
// iife  -> anonymous function 
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on('error',(error)=>{
            console.log("App Error: ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on http:/localhost:${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR: ",error)
        throw err 
    }
})()
*/