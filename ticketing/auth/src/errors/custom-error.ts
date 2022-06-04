/**
 * Abstract class representing the generic structure
 * of error we want to send to the consumer
 */
export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract serializeErrors(): { message: string; field?: string }[];

  constructor(message: string) {
    super(message);
    // Only because we are extending built-in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
