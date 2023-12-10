import { Model } from "mongoose";

export type IProduct = {
  title: string;
  name: string;
  email: string;
  img: string;
  price: string;
  affiliateLink: string;
  clickPerCount: number;
  description: string;
  date: string;
  categories: string;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
