import { Router } from "express";
import userRouter from "./userRoutes.js";
import productRouter from "./productRoutes.js";
import orderRouter from "./orderRoutes.js";
import uploadRouter from "./uploadRoutes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/upload", uploadRouter);

export default router;
