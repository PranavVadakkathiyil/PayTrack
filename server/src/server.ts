import dotenv from "dotenv"
import app from './app'
import DBConnect from "./config/db"
dotenv.config()
const PORT = process.env.PORT
DBConnect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Connected on   -:- http://localhost:${PORT}`);
        
    })
})
.catch((err)=>{
    console.log('server connection error',err);
    
})