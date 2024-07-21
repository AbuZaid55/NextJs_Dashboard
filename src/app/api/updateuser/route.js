import { connectDb } from "@/DB/dbConn"
import userModel from "@/models/userModel"
import { NextResponse } from "next/server"

export async function POST(req){
    await connectDb()
    try {
        const {_id,name,isAdmin,phone,address} = await req.json()
        if(!name || !phone){
            return NextResponse.json({success:false,message:"All field are required!"},{status:400})
        }
        if(!_id){
            return NextResponse.json({success:false,message:"User Id not found!"},{status:400})
        }
        const user = await userModel.findById(_id)
        if(!_id){
            return NextResponse.json({success:false,message:"User not found!"},{status:400})
        }
        user.name = name
        user.isAdmin = isAdmin
        user.phone = phone
        user.address = address
        await user.save()
        return NextResponse.json({success:true,message:"User updated successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({success:false,message:error.message},{status:400})
    }
}