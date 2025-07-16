import mongoose,{connect} from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
console.log();


const DBConnect = async()=>{
    try {
        const conn = await connect(MONGODB_URI!)
        console.log(`DataBase connected on -:- ${conn.connection.host}`);
        
    } catch (error) {
        console.log("DB Connection error -:- ",error);
        
    }
}
export default DBConnect