import express  from "express"
import { login, sign } from "../Controllers/authController.js"
const router=express.Router()

router.post("/",sign)
router.post("/login",login)

export default router