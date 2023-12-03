import express from "express";
import { videoController } from "./videos.controller";

const router = express.Router();

router.route("/create-video").post(videoController.createVideoController);
router.route("/").get(videoController.getVideoController);

router
  .route("/:id")
  .patch(videoController.updateVideoController)
  .delete(videoController.deleteVideoController);

export const videoRouter = router;
