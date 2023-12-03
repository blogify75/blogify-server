import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { videoService } from "./videos.service";

const createVideoController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...blogData } = req.body;

    const result = await videoService.createVideoService(blogData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "video section is created successfully",
      data: result,
    });
  }
);

const getVideoController = catchAsync(async (req: any, res: Response) => {
  const searchTerm = req.query;

  const result = await videoService.getVideoService(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "video section is found successfully",
    data: result,
  });
});

const updateVideoController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await videoService.updateVideoService(id, updateBodyData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "video section is updated successfully",
      data: result,
    });
  }
);

const deleteVideoController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await videoService.deleteVideoService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "video section is deleted successfully",
      data: result,
    });
  }
);

export const videoController = {
  createVideoController,
  getVideoController,
  updateVideoController,
  deleteVideoController,
};
