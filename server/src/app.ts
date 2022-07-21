import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mongoose from "mongoose";
require("dotenv").config({ path: "./.env" });

import indexRouter from "./routes/index.routes";
import accommodationsRouter from "./routes/accommodations.routes";
import activitiesRouter from "./routes/activities.routes";

const app: Application = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//we use don't use join but resolve without __dirname
app.use(express.static(path.resolve("../public")));

//MongoDB connection :
mongoose
  .connect(process.env.MONGODB_URL!, {})
  .then(() => console.log("Connection MongoDB successful..."))
  .catch(() => console.log("Connection MongoDB failed..."));

//Cors config :
app.use((_, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/", indexRouter);
app.use("/accommodations", accommodationsRouter);
app.use("/activities", activitiesRouter);

// error handler
app.use((err: any, req: Request, res: Response, _: NextFunction) => {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//we use don't use join but resolve without __dirname
app.get("*", (_, res: Response) => {
  res.sendFile(path.resolve("../public/index.html"));
});

export default app;
