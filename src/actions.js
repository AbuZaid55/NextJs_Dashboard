import { connectDb } from "@/DB/dbConn"
import emailValidator from 'email-validator'
import userModel from "@/models/userModel"
import bcrypt from 'bcrypt'

export const login = async(credentials)=>{
    await connectDb() 
    try {
        const {email,password}=credentials 
        if(!email || !password){
            return {success:false,message:"All field are required!"}
        }
        if(!emailValidator.validate(email)){
            return {success:false,message:"Invalid Email Id!"}
        }
        const user = await userModel.findOne({email})
        if(!user){
            return {success:false,message:"Invalid email or password!"}
        }
        const verifyPass = await bcrypt.compare(password,user.password)
        if(!verifyPass){
            return {success:false,message:"Invalid email or password"}
        }
        user.password=undefined
        return {success:true,user:user}
    } catch (error) {
        return{success:false,message:error.message}
    }
}