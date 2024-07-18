import bcrypt from "bcrypt";
import userModel from "@/models/userModel";
import { connectDb } from "@/DB/dbConn";
import emailValidator from "email-validator";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password, phone, address } = await req.json();
    await connectDb();
    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { success: false, message: "All fields are required!" },
        { status: 400 }
      );
    }
    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password should be at least 8 characters!",
        },
        { status: 400 }
      );
    }
    if (!emailValidator.validate(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address!" },
        { status: 400 }
      );
    }
    const user = await userModel.findOne({ email: email });
    if (user) {
      return NextResponse.json(
        { success: false, message: "User with this email already exists!" },
        { status: 409 }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    await userModel({ name, email, password: hashPass, phone, address }).save();
    return NextResponse.json(
      { success: true, message: "Signup Successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
