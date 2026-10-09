import { Router } from "express";
import { contact } from "../controller/contact-controller.js";

const router=Router()

router.route("/contact").post(contact)

export const contactRoute=router;