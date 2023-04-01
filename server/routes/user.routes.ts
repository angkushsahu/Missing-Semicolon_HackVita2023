import { Router } from "express";
import * as controllers from "../controllers/user.controller";
import { isUserAuthenticated } from "../middlewares";
const router = Router();

router.route("/chage-password").post(isUserAuthenticated, controllers.changePassword);
router.route("/logout").get(isUserAuthenticated, controllers.userLogout);
router.route("/storage").get(controllers.getAllStorageUnits);
router.route("/transport").get(controllers.getAllTransport);
router.route("/:id").get(controllers.getUserById);
router
    .route("/")
    .get(isUserAuthenticated, controllers.getUser)
    .put(isUserAuthenticated, controllers.updateUserDetails)
    .delete(isUserAuthenticated, controllers.deleteUserAccount);

export default router;
