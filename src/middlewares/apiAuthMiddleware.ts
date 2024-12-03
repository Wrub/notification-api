import { Request, Response, NextFunction } from "express";

const VALID_API_TOKEN = process.env.API_TOKEN || "notifyapi";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  // Verifica se o Authorization esta presente no header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      error: { message: "Authorization header is missing or malformed" },
    });
    return;
  }

  const token = authHeader.split(" ")[1]; // Extrai o token

  // Verifica se o token corresponde ao token válido
  if (token !== VALID_API_TOKEN) {
    res.status(403).json({
      success: false,
      error: { message: "Invalid token" },
    });
    return;
  }

  next(); // Continua para a próxima etapa se o token for válido
};
