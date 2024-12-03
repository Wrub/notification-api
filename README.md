# Notification API
Restful API made with ExpressJS.

This is a Notification API to add, list, and delete notifications.

## Setup and Middlewares
The API is currently using middlewares to validate requests to the [Endpoints](#endpoints) and to handle errors.

Bearer token is required to make any requests, and you can find it in the [apiAuthMiddleware.ts](./src/middlewares/apiAuthMiddleware.ts#L3-C60) for test purposes.

## Endpoints

| Method | Endpoint                | Description                                |
|--------|-------------------------|--------------------------------------------|
| POST   | /api/notifications       | Add a new notification.                    |
| GET    | /api/notifications       | List all notifications.                   |
| GET    | /api/notifications/:id   | Get a notification by ID.                  |
| DELETE | /api/notifications/:id   | Delete a notification by ID.               |

