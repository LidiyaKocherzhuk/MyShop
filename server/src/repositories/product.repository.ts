import { IProduct } from "../interfaces";
import { Product } from "../models";

class ProductRepository {
  async create(data: Partial<IProduct>) {
    return await Product.create(data);
  }
}

export const productRepository = new ProductRepository();
