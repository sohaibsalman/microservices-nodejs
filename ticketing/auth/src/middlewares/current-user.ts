import { NextFunction, Request, Response } from 'express';

import { TokenManager } from '../services/token-manager';

// Interface to represent user payload
interface UserPayload {
  id: string;
  email: string;
}

// Add custom property to Express Request type definintion
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = TokenManager.verifyJwtToken(
      req.session?.jwt
    ) as UserPayload;

    req.currentUser = payload;
  } catch (err) {}

  next();
};
