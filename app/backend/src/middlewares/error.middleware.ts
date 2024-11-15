import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import HttpException from '../errors/http_exception.error';

const errorMiddleware: ErrorRequestHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log('err', err);
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default errorMiddleware;
