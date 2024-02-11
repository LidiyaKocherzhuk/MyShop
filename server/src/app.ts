import express from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs";
import { productRouter } from "./routers/product.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", productRouter);

const PORT = configs.PORT;
app.listen(PORT, async () => {
  await mongoose.connect(configs.DB_URI);
  console.log(`Server has started on PORT ${PORT}`);
});
