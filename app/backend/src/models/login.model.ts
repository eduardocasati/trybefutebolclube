import SequelizeUser from '../database/models/user.model';
import IUser from '../interfaces/IUser';
import IUserModel from '../interfaces/IUserModel';

class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    const getUser = await this.model.findOne({ where: { email } });
    if (getUser === null) return null;
    const { id, username, role, password } = getUser;
    return { id, username, role, email, password };
  }
}

export default UserModel;
