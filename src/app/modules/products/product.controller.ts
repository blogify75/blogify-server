import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ProductService } from "./product.service";

const createProductController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...blogData } = req.body;

    const result = await ProductService.createProductService(blogData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product section is created successfully",
      data: result,
    });
  }
);

const getProductController = catchAsync(async (req: any, res: Response) => {
  const searchTerm = req.query;

  const result = await ProductService.getProductService(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "product section is found successfully",
    data: result,
  });
});

const updateProductController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await ProductService.updateProductService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product section is updated successfully",
      data: result,
    });
  }
);

const deleteProductController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ProductService.deleteProductService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product section is deleted successfully",
      data: result,
    });
  }
);

export const productController = {
  createProductController,
  getProductController,
  updateProductController,
  deleteProductController,
};
