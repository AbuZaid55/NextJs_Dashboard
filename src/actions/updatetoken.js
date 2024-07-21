import { connectDb } from "@/DB/dbConn"
import userModel from "@/models/userModel"

export default async function updateToken(_id){
    await connectDb()
    try {
        if(!_id){ 
            return {success:false,message:"User id not found"}
        }
        const user = await userModel.findOne({_id})
        if(!user){
            return {success:false,message:"Invalid User"}
        }
        return {success:true,user:user}
    } catch (error) {
        return {success:false,message:error.message}
    }
}