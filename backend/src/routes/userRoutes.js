import { Router } from "express";
import * as userCtrl from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/", userCtrl.registerUser);
router.get("/all-users", protect, admin, userCtrl.getUsers);
router.post("/login", userCtrl.authUser);
router.get("/profile", protect, userCtrl.getUserProfile);
router.put("/profile", protect, userCtrl.updateUserProfile);
router.delete("/:id", protect, admin, userCtrl.deleteUser);
router.get("/:id", protect, admin, userCtrl.getUserById);
router.put("/:id", protect, admin, userCtrl.updateUser);

export default router;
