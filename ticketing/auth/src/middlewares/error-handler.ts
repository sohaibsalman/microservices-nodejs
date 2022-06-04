import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../errors/custom-error';

/**
 * Error handler middleware for the application
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
