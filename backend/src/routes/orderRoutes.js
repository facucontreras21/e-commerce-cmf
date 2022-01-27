import { Router } from "express";
import * as orderCtrl from "../controllers/orderController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/", protect, orderCtrl.addOrderItems);
router.get("/myorders", protect, orderCtrl.getMyOrders);
router.get("/", protect, admin, orderCtrl.getOrders);
router.get("/:id", protect, orderCtrl.getOrderById);
router.put("/:id/pay", protect, orderCtrl.updateOrderToPaid);
router.put("/:id/deliver", protect, orderCtrl.updateOrderToDelivered);

export default router;
