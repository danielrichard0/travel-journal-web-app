import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import users from "./routes/users.mjs"

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", users);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})