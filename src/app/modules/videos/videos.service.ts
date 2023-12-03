import { IGenericResponse } from "../../interface/common";
import { ISearchTerm } from "../../interface/searchTerm";
import { videoSearchableField } from "./videos.constant";
import { IVideo } from "./videos.interface";
import { Video } from "./videos.model";

const createVideoService = async (payload: IVideo): Promise<IVideo> => {
  const result = await Video.create(payload);

  return result;
};

const getVideoService = async (
  payload: ISearchTerm
): Promise<IGenericResponse<IVideo[]>> => {
  const { searchTerm, page, limit } = payload;

  const condition = [];

  if (searchTerm) {
    condition.push({
      $or: videoSearchableField.map((fields) => ({
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

  const result = await Video.find(whereCondition)
    .sort({ createdAt: -1 })
    .skip(queries.skip)
    .limit(queries.limit);

  const total = await Video.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateVideoService = async (
  id: string,
  payload: Partial<IVideo>
): Promise<IVideo | null | undefined> => {
  const result = await Video.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteVideoService = async (id: string): Promise<IVideo | null> => {
  const result = await Video.findByIdAndDelete({ _id: id });

  return result;
};

export const videoService = {
  createVideoService,
  getVideoService,
  updateVideoService,
  deleteVideoService,
};
