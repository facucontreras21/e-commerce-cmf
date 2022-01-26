import { Router } from "express";
import * as userCtrl from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/", userCtrl.registerUser);
router.post("/login", userCtrl.authUser);
router.get("/profile", protect, userCtrl.getUserProfile);
router.put("/profile", protect, userCtrl.updateUserProfile);
router.get("/all-users", protect, admin, userCtrl.getUsers);

export default router;
