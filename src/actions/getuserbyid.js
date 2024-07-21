"use server"
import { connectDb } from "@/DB/dbConn"
import userModel from "@/models/userModel"

export default async function getuserbyid(_id){
    await connectDb()
    try {
        if(!_id){ 
            return {success:false,message:"User id not found"}
        }
        const user = await userModel.findOne({_id})
        if(!user){
            return {success:false,message:"Invalid User"}
        }
        user.password=undefined
        const data = {success:true,user:user}
        return JSON.parse(JSON.stringify(data))
    } catch (error) {
        return {success:false,message:error.message}
    }
}