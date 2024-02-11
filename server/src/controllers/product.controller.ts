import { NextFunction, Request, Response } from "express";

import { productRepository } from "../repositories";

class ProductController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productRepository.create(req.body);
      res.json(product);
    } catch (e) {
      next(e);
    }
  }
}

export const productController = new ProductController();
