import { Schema, model } from "mongoose";
import { IVideo, VideoModel } from "./videos.interface";

const videoSchema = new Schema<IVideo, VideoModel>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 80,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    videoLink: {
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
  },
  {
    timestamps: true,
  }
);

export const Video = model<IVideo, VideoModel>("Video", videoSchema);
