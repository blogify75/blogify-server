import express from "express";
import { blogController } from "./blog.controller";

const router = express.Router();

router.route("/create-blog").post(blogController.createBlogController);
router.route("/").get(blogController.getBlogController);

router
  .route("/:id")
  .patch(blogController.updateBlogController)
  .delete(blogController.deleteBlogController);

export const blogRouter = router;
