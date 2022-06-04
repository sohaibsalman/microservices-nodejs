import { CustomError } from './custom-error';

/**
 * Class representing the errors occured due to database failure
 */
export class DatabaseConnectionError extends CustomError {
  reason = 'Failed to connect with the database...';
  statusCode = 500;

  constructor() {
    super('Failed to connect with the database');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
