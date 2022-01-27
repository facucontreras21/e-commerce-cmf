import { Router } from "express";
import * as orderCtrl from "../controllers/orderController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = Router();

router.get("/all-orders", productCtrl.getProducts);

export default router;
