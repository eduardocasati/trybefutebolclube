import IUser from './IUser';

interface IUserModel {
  findByEmail(email: IUser['email']): Promise<IUser | null>
}

export default IUserModel;
