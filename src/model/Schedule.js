import { Schema, model } from "mongoose";

const Schedule = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Model = model("schedule", Schedule);
export default Model;
