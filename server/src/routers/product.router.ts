import { Router } from "express";

import { productController } from "../controllers";

export const productRouter = Router();

productRouter.post("/", productController.create);
