import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password length must be atleast 4'),
  ],
  (req: Request, res: Response) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password }: { email: string; password: string } = req.body;
    console.log('Creating user...');

    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signupRouter };
