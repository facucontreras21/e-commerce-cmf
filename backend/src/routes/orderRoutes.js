import { Router } from "express";
import * as orderCtrl from "../controllers/orderController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/", protect, orderCtrl.addOrderItems);

export default router;
