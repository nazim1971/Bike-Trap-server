import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import { notFoundError } from "./middlewires/notFoundError";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./middlewires/globalErrorHandler";

const app: Application = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike Trap server is on fire...",
  });
});

app.use("/api", router);

app.use(globalErrorHandler);
app.use(notFoundError);

export default app;
