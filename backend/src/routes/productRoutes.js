import { Router } from "express";
import * as productCtrl from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = Router();

router.get("/all-products", productCtrl.getProducts);
router.post("/", protect, admin, productCtrl.createProduct);
router.post("/:id/reviews", protect, productCtrl.creatProductReview);
router.get("/:id", productCtrl.getProductsById);
router.delete("/:id", protect, admin, productCtrl.deleteProduct);

export default router;
