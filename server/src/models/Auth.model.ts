import mongoose,{Schema,model,models,Document, Types} from "mongoose";
import bcrypt from "bcryptjs"
import dotenv from 'dotenv'
import jwt, { SignOptions } from 'jsonwebtoken'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPAIRE = process.env.JWT_EXPAIRE

export interface Iuser extends Document{
    _id:Types.ObjectId;
    name:string;
    email:string;
    password:string;
    phone:string;
    role:"Seller"|"Customer";
    refreshToken:string;
}
const AuthSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["Seller","Customer"],default:"Customer"},
    refreshToken:{type:String}

},{timestamps:true})
AuthSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})
AuthSchema.methods.isPasswordCorrect(async function (this: Iuser,password:string) {
    return await bcrypt.compare(password,this.password)
})
AuthSchema.methods.AccessToken = function(){
    if(!JWT_SECRET||!JWT_EXPAIRE){
        throw Error("Not env conncted")
    }
    return jwt.sign({
        _id:this._id,
        name:this.name,
        role:this.role,
    },JWT_SECRET,{expiresIn:JWT_EXPAIRE}as SignOptions)
}
AuthSchema.methods.RefreshToken = function(){
    if(!JWT_SECRET||!JWT_EXPAIRE){
        throw Error("Not env conncted")
    }
    return jwt.sign({
        _id:this._id,
    },JWT_SECRET,{expiresIn:JWT_EXPAIRE}as SignOptions)
}
const User = models?.User || model<Iuser>("User",AuthSchema)
export default User