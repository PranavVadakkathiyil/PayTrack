import  express  from "express";
import cors from 'cors'
import cookiesParser from 'cookie-parser'
const app = express()
app.use(cors({
    origin:["http://localhost:513"],
    credentials:true
}))
app.use(express.urlencoded({limit:"16kb",extended:true}))
app.use(express.static('public'))
app.use(express.json({limit:"16kb"}))
app.use(cookiesParser())

export default app