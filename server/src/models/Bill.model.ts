import mongoose,{Schema,models,model,Document,Types} from "mongoose";
export interface IBill extends Document{
    _id:Types.ObjectId;
    date:Date;
    amount:string;
    image:string;
    paymentMode:string;
    paymentStatus:string;
    razorpayId:string;



}
const BillSchema = new Schema<IBill>({
    date:{type:Date,required:true},
    amount:{type:String,required:true},
    image:{type:String,required:true},
    paymentMode:{type:String,enum:["COD","ONLINE"]},
    paymentStatus:{type:String,enum:["Pending","Completed","Failed"],required:true},
    razorpayId:{type:String},
   

},{timestamps:true})

const Bill = models?.Bill || model<IBill>("Bill",BillSchema)
export default Bill