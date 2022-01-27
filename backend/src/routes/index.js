import { Router } from "express";
import userRouter from "./userRoutes.js";
import productRouter from "./productRoutes.js";
import orderRouter from "./orderRoutes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/ordes", orderRouter);

export default router;
