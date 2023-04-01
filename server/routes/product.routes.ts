import { Router } from "express";
import * as controllers from "../controllers/products.controller";
import { isUserAuthenticated } from "../middlewares";
const router = Router();

router.route("/create").post(isUserAuthenticated, controllers.createProduct);
router.route("/all").get(controllers.getAllProducts);
router.route("/all/my-products").get(isUserAuthenticated, controllers.getAllProductsCreatedByMe);
router.route("/delete/:id").delete(isUserAuthenticated, controllers.deleteProduct);
router.route("/:id").get(controllers.getProduct).put(isUserAuthenticated, controllers.updateProduct);

export default router;
