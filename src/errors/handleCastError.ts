import mongoose from "mongoose";
import { IGenericErrorMessage } from "../app/interface/error";

const handleCastError = (err: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: err.path,
      message: "invalidId",
    },
  ];

  const statusCode = 400;

  return {
    statusCode: statusCode,
    message: "Cast Error",
    errorMessages: errors,
  };
};

export default handleCastError;
