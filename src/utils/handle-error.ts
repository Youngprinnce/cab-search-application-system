// Error Handler Class
class ErrorHandler extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

function throwError(message: string, statusCode: number) {
  throw new ErrorHandler(message, statusCode);
}

export default throwError;
