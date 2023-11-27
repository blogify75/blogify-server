import { Model } from "mongoose";

export type IBlog = {
  title: string;
  sub_title: string;
  name: string;
  email: string;
  img: string;
  description: string;
  isApproved: boolean;
  date: string;
};

export type BlogModel = Model<IBlog, Record<string, unknown>>;
