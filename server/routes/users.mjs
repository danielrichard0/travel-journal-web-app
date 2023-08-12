import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const userRouter = express.Router();

userRouter.get("/", async(req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.send(results).status
})

userRouter.get("/:id", async (req, res) => {
    let collection = await db.collection("users");
    query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result) res.send("not found").status(404);
    else res.send(result).status(200);
})

export default userRouter
