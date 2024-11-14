import { NextFunction, Request, Response } from 'express';
import JWT from '../../utils/JWT';

class tokenValidation {
  static async verifyToken(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { authorization } = request.headers;
    if (!authorization) {
      return response.status(401).json({ message: 'Token not found' });
    }
    const token = authorization.split(' ')[1];
    const decryptToken = JWT.verify(token);
    if (decryptToken === 'Token must be a valid token') {
      return response.status(401).json({ message: decryptToken });
    }
    request.body.user = decryptToken;
    next();
  }
}

export default tokenValidation;
