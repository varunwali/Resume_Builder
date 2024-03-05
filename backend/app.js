import express from "express";
import { config } from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url"; // Import fileURLToPath function
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

const __filename = fileURLToPath(import.meta.url); // Get current file path
const __dirname = path.dirname(__filename); // Get directory name

const app = express(); //creating the express instance
config({ path: "./config/config.env" }); //loading environment variables

app.use(cors());

app.use(cookieParser());
app.use(express.json()); //parsing incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});

dbConnection();

app.use(errorMiddleware);
export default app;
