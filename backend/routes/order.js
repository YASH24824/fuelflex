import express from "express"
import {createOrder,getOrderHistory} from "../Controllers/orderController.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createOrder);
router.get('/history', verifyToken, getOrderHistory);


export default router
