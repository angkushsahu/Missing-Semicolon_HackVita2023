import { Router } from "express";
import * as controllers from "../controllers/auth.controller";
const router = Router();

router.route("/signup/user").post(controllers.userRegister);
router.route("/signup/transport").post(controllers.transportRegister);
router.route("/signup/storage").post(controllers.storageRegister);
router.route("/login").post(controllers.userLogin);
router.route("/forgot-password").post(controllers.forgotPassword);
router.route("/reset-password/:id").post(controllers.resetPassword);

export default router;
