import { Signup } from "../controllers/AuthController.mjs";
import express from "express";
const router = express.Router();

router.post("/signup", Signup);

export default router