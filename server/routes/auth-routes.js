import { Router } from "express";
import * as authController from "../controller/auth-controller.js"
import { userVerify } from "../middleware/auth-middleware.js";

const router=Router()

router.route("/register").post(authController.register)
router.route("/login").post(authController.login)
router.route("/user").get(userVerify,authController.user)

export const authRoute=router;