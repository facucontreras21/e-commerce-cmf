import { Router } from "express";
import * as uploadCtrl from "../controllers/uploadController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/",protect,admin, uploadCtrl.upload);

export default router;