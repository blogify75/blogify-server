import { Schema, model } from "mongoose";
import { BlogModel, IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog, BlogModel>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 80,
    },
    sub_title: {
      type: String,
      required: true,
      maxlength: 299,
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
    description: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<IBlog, BlogModel>("Blog", blogSchema);
