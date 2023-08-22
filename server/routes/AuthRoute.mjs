import { Signup } from "../controllers/AuthController.mjs";
import { Login } from "../controllers/AuthController.mjs"
import express from "express";
import { userVerification } from "../middlewares/AuthMiddleware.mjs";
import { ViewPost } from "../controllers/PostController.mjs"
import { UploadPost } from "../controllers/PostController.mjs";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login)
router.get("/post", ViewPost)
router.post('/', userVerification);
router.post('/upload', UploadPost)

export default router