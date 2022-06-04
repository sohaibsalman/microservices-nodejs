export class DatabaseConnectionError extends Error {
  reason = 'Failed to connect with the database...';

  constructor() {
    super();
    // Only because we are extending built-in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
