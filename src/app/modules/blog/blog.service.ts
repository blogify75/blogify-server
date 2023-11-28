import { IGenericResponse } from "../../interface/common";
import { ISearchTerm } from "../../interface/searchTerm";
import { blogSearchableField } from "./blog.constant";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogService = async (payload: IBlog): Promise<IBlog> => {
  const result = await Blog.create(payload);

  return result;
};

const getBlogService = async (
  payload: ISearchTerm
): Promise<IGenericResponse<IBlog[]>> => {
  const { searchTerm, page, limit } = payload;

  const condition = [];

  if (searchTerm) {
    condition.push({
      $or: blogSearchableField.map((fields) => ({
        [fields]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereCondition = condition.length > 0 ? { $and: condition } : {};

  const queries: any = {};

  if (page) {
    const skip = (page - 1) * +limit;
    queries.skip = skip;
    queries.limit = +limit;

    console.log(queries.skip, queries.limit);
  }

  const result = await Blog.find(whereCondition)
    .skip(queries.skip)
    .limit(queries.limit);

  const total = await Blog.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateBlogService = async (
  id: string,
  payload: Partial<IBlog>
): Promise<IBlog | null | undefined> => {
  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteBlogService = async (id: string): Promise<IBlog | null> => {
  const result = await Blog.findByIdAndDelete({ _id: id });

  return result;
};

export const blogService = {
  createBlogService,
  getBlogService,
  updateBlogService,
  deleteBlogService,
};
