import * as bcrypt from 'bcryptjs';
import IRole from '../interfaces/IRole';
import { ServiceMessage, ServiceResponse } from '../interfaces/IServiceResponse';
import IToken from '../interfaces/IToken';
import IUser from '../interfaces/IUser';
import IUserModel from '../interfaces/IUserModel';
import UserModel from '../models/login.model';
import JWT from '../utils/JWT';

class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwt = JWT,
  ) { }

  public async login(
    email: string,
    password: string,
  ): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const getUser = await this.userModel.findByEmail(email);
    if (getUser) {
      if (!bcrypt.compareSync(password, getUser.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
      }
      const token = this.jwt.sign({ email });
      return { status: 'SUCCESSFUL', data: { token } };
    }
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }

  public async getUserRole(email: string): Promise<ServiceResponse<ServiceMessage | IRole>> {
    const getUser = await this.userModel.findByEmail(email);
    const { role } = getUser as IUser;
    return { status: 'SUCCESSFUL', data: { role } };
  }
}

export default UserService;
