import { Document } from "mongoose";
export interface IProduct extends Document {
  SKU: string;
  type: string;
  modelName: string;
  price: string;
  description: string;
  color: string;
}
