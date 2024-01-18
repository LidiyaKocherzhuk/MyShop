import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5001;
app.listen(PORT, async () => {
  console.log(`Server has started on PORT ${PORT}`);
});
