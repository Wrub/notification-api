import { NextFunction, Request, Response } from "express";
import { INotification } from "../types/notification";

const { notifications } = require("../models/notification");
const { v4: uuidv4 } = require("uuid");

export const getNotifications = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    next(error);
  }
};

export const getNotificationById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    if (!id) {
      const error = new Error("Id is required");
      (error as any).status = 400;
      return next(error);
    }

    const foundNotification = notifications.find(
      (n: INotification) => n.id === id
    );

    if (!foundNotification) {
      const error = new Error("Notification not found");
      (error as any).status = 404;
      (error as any).code = "NOT_FOUND";
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: foundNotification,
    });
  } catch (error) {
    next(error);
  }
};

export const addNotification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { message } = req.body as Partial<INotification>;

    if (!message || message.trim() === "") {
      const error = new Error("Message is required and cannot be empty");
      (error as any).status = 400;
      return next(error);
    }

    const newNotification: INotification = {
      id: uuidv4() as string,
      message,
      createdAt: new Date(),
    };

    notifications.push(newNotification);

    res.status(201).json({
      success: true,
      data: `Notification created successfully. id:${newNotification.id}; message: ${newNotification.message}`,
    });
  } catch (error) {
    next(error);
  }
};

export const removeNotification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    if (!id) {
      const error = new Error("Id is required to remove a notification");
      (error as any).status = 400;
      return next(error);
    }

    const index = notifications.findIndex((n: INotification) => n.id === id);

    if (index === -1) {
      const error = new Error("Notification not found");
      (error as any).status = 404;
      return next(error);
    }

    notifications.splice(index, 1);

    res.status(200).json({
      success: true,
      data: `Notification with id ${id} has been removed`,
    });
  } catch (error) {
    next(error);
  }
};
