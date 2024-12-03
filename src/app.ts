import { Application } from "express";
import { errorHandler } from "./middlewares/errorMiddleware";
import { validateToken } from "./middlewares/apiAuthMiddleware";

const express = require("express");
const routes = require("./routes");
const app: Application = express();

app.use(express.json());

app.use(validateToken);

app.use("/api", routes);

app.use(errorHandler);

export default app;
