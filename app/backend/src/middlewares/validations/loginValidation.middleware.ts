import { NextFunction, Request, Response } from 'express';

class userLoginValidation {
  static validate(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !password) {
      return response.status(400).json({ message: 'All fields must be filled' });
    }
    if (!regex.test(email) || password.length < 6) {
      return response.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }
}

export default userLoginValidation;
