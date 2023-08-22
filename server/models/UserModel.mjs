import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Your username is required"],
    },
    lastName: {
        type: String,
        required: [true, "Your username is required"],
    },
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Your password is required"]
    }
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('user', userSchema);
 
export default User;