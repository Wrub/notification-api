import {
  getNotificationById,
  getNotifications,
} from "../controllers/notificationController";

const express = require("express");

const { addNotification } = require("../controllers/notificationController");

const router = express.Router();

router.get("/", getNotifications);
router.get("/:id", getNotificationById);
router.post("/", addNotification);

module.exports = router;
