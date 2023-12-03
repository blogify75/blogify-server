import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.route("/create-product").post(productController.createProductController);
router.route("/").get(productController.getProductController);

router
  .route("/:id")
  .patch(productController.updateProductController)
  .delete(productController.deleteProductController);

export const productRouter = router;
