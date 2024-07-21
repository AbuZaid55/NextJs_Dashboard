import { connectDb } from "@/DB/dbConn";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(req){
    await connectDb()
    try {
        const users = await userModel.find().select("-password")
        return NextResponse.json({success:true,users:users},{status:200})
    } catch (error) {
        return NextResponse.json({success:false,message:error.message},{status:400})
    }
}