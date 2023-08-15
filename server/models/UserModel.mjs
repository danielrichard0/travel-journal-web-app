import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
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