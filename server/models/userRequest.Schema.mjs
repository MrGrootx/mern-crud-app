import DB from "mongoose";
import { Schema } from "mongoose";

let Users = new Schema(
  {
    technology: {
      type: String,
      required: [true, "technology required"],
      minLength: [2, "Technology must be at least 2 characters"],
      maxLength: [10, "Technology must be less than 10 characters."],
    },
    title: {
      type: String,
      required: true,
      minLength: [10, "Title must be at least 10 characters"],
      maxLength: [180, "Title must be less than 180 characters."],
    },
    description: {
      type: String,
      required: true,
      minLength: [20, "Description must be at least 20 characters"],
      maxLength: [2000, "Description must be less than 2000 characters."],
    },
  },
  { timestamps: true }
);

const SchemaData = DB.model("Users", Users);

// creating Post
export const createRequest = async (reqData) => {
  console.log(reqData);
  try {
    await SchemaData.create(reqData);
  } catch (error) {
    throw error;
  }
};

// Get All Post
export const getAllRequestData = async (allData) => {
  try {
    const data = await SchemaData.find({});
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Update by Id
export const updateDataByid = async (id, data) => {
  try {
    return await SchemaData.findByIdAndUpdate({ _id: id }, data);
  } catch (error) {
    console.log(error);
  }
};
