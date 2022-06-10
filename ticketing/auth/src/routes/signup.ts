import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middlewares/validate-request';
import { TokenManager } from '../services/token-manager';

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
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password }: { email: string; password: string } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password });
    await user.save();

    const userJwt = TokenManager.generateJwtToken(user);

    // Store JWT to session
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send({ user });
  }
);

export { router as signupRouter };
