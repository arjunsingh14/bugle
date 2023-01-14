import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user";
import articleRouter from "./routes/articles";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1", articleRouter);

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI || "")
    .then(() => console.log(`Listening on port ${PORT}`))
    .catch((error) => console.log(error));
});
