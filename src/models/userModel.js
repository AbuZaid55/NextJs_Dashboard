import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default:"https://avatar.iran.liara.run/public/boy",
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
},
    { timestamps: true }
);

const userModel = mongoose.models.Users || mongoose.model("Users", userSchema)
export default userModel