import { Request, Response } from "express";

const express = require("express");
const notificationRoute = require("./notificationRoute");
const router = express.Router();

router.use("/notifications", notificationRoute);

module.exports = router;
