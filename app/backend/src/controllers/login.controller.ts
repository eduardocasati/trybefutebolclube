import { Request, Response } from 'express';
import UserService from '../services/user.service';
import mapStatusToHTTPCode from '../utils/httpStatusMap';

class UserController {
  constructor(private userService = new UserService()) {}

  public async userLogin(request: Request, response: Response) {
    const { email, password } = request.body;
    const serviceResponse = await this.userService.login(email, password);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return response
        .status(mapStatusToHTTPCode(serviceResponse.status))
        .json(serviceResponse.data);
    }
    return response.status(200).json(serviceResponse.data);
  }

  public async getUserRole(request: Request, response: Response) {
    const { user } = request.body;
    const serviceResponse = await this.userService.getUserRole(user.email);
    return response.status(200).json(serviceResponse.data);
  }
}

export default UserController;
