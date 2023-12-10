import { IGenericResponse } from "../../interface/common";
import { ISearchTerm } from "../../interface/searchTerm";
import { productSearchableField } from "./product.constant";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductService = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};

const getProductService = async (
  payload: ISearchTerm
): Promise<IGenericResponse<IProduct[]>> => {
  const { searchTerm, page, limit } = payload;

  const condition = [];
  // query
  if (searchTerm) {
    condition.push({
      $or: productSearchableField.map((fields) => ({
        [fields]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereCondition = condition.length > 0 ? { $and: condition } : {};

  const queries: any = {};

  // pagination
  if (page) {
    const skip = (page - 1) * +limit;
    queries.skip = skip;
    queries.limit = +limit;

    console.log(queries.skip, queries.limit);
  }

  const result = await Product.find(whereCondition)
    .sort({ createdAt: -1 })
    .skip(queries.skip)
    .limit(queries.limit);

  const total = await Product.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateProductService = async (
  id: string,
  payload: Partial<IProduct>
): Promise<IProduct | null | undefined> => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteProductService = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findByIdAndDelete({ _id: id });

  return result;
};

export const ProductService = {
  createProductService,
  getProductService,
  updateProductService,
  deleteProductService,
};
