import { Model } from "mongoose";

export type IBlog = {
  title: string;
  name: string;
  email: string;
  img: string;
  description: string;
  isApproved: boolean;
};

export type BlogModel = Model<IBlog, Record<string, unknown>>;