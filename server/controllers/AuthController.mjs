import User from "../models/UserModel.mjs";
import { createSecretToken } from "../util/secretToken.mjs";
import bcrypt from "bcrypt";

const Signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.json({ message: "User Already Exist" });
        }
        const user = await User.create({ email,password });
        console.log(`user id : ${user._id}`);
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfuly", success:true, user });
        next();
    } catch (error) {
        console.error(error)
    }
}

export { Signup };