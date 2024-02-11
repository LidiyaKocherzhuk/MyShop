import { model, Schema } from "mongoose";

import { IProduct } from "../interfaces";

const productSchema = new Schema(
  {
    SKU: {
      type: String,
      unique: true,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model<IProduct>("product", productSchema);
