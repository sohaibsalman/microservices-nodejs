import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

/**
 * Class representing the errors occured during data validations
 */
export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
