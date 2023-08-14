import express from "express";
import db from "../db/conn.mjs";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
const userRouter = express.Router();

userRouter.post("/login", async(req, res) => {
    const {email, password} = req.body;
    try {
        const collection = await db.collection('users');
        const user = await collection.findOne({ email });
        
        if(!user) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        
        if(!passwordMatch) {
            return res.status(401).json({ meesage: "Invalid Credentials" });
        }
        return res.status(200).json({ message: "Login Successful " });

    } catch (error) {
        console.error('Error during login', error);
        return res.status(500).json({ message: "Internal server error" })
    }

});

userRouter.get("/:id", async (req, res) => {
    let collection = await db.collection("users");
    query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result) res.send("not found").status(404);
    else res.send(result).status(200);
})

export default userRouter
