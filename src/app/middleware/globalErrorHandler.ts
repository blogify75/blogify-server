import { ErrorRequestHandler, NextFunction } from "express";
import configuration from "../../configuration";
import { IGenericErrorMessage } from "../interface/error";
import ApiError from "../../errors/apiErrors";
import handleValidationError from "../../errors/handleValidationError";
import handleCastError from "../../errors/handleCastError";

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "something went wrong";
  let errorMessages: IGenericErrorMessage[] = [];

  if (error.name === "validationError") {
    const simplifiedValidationError = handleValidationError(error);
    statusCode = simplifiedValidationError.statusCode;
    message = simplifiedValidationError.message;
    errorMessages = simplifiedValidationError.errorMessages;
  } else if (error?.name === "CastError") {
    const simplifiedCastError = handleCastError(error);
    statusCode = simplifiedCastError.statusCode;
    message = simplifiedCastError.message;
    errorMessages = simplifiedCastError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errorMessages: errorMessages,
    stack: configuration.env !== "production" ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
