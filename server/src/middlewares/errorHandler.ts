import { Request, Response, NextFunction } from 'express';

interface ErrorMessage {
  stack?: string;
  status?: number;
  message: string;
}

const errorHandler = (
  err: ErrorMessage, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
