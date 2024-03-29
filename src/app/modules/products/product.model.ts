import { Schema, model } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

const productSchema = new Schema<IProduct, ProductModel>(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    clickPerCount: {
      type: Number,
      default: 0,
      required: true,
    },
    affiliateLink: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct, ProductModel>("Product", productSchema);
