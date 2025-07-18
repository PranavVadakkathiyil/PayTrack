import { Request,Response,NextFunction } from "express"
import User from "../models/Auth.model"
import  jwt, { JwtPayload }  from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET
interface AuthRequest extends Request{
    userId:any
}
const verifyUser = async(req:AuthRequest,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Autherization")?.replace("Bearer ","")
        if(!token){
            throw Error("No Token from frontend")
        }
        const tokenvalidate = await jwt.verify(token,JWT_SECRET!) as JwtPayload
        const userInfo = await User.findById(tokenvalidate?._id)
        if(!userInfo){res.status(400).json({message:"User not autherized"}); return}
        req.userId = userInfo._id
        next()



    } catch (error) {
        console.log("Error on VerifyUser middleware");
        
    }
}

export default verifyUser