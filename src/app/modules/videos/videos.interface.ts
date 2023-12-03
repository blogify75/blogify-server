import { Model } from "mongoose";

export type IVideo = {
  title: string;
  name: string;
  email: string;
  videoLink: string;
  description: string;
  affiliateLink: string;
  clickPerCount: number;
  date: string;
};

export type VideoModel = Model<IVideo, Record<string, unknown>>;
