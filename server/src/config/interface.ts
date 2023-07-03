export interface INewUser {
  firstName: string;
  lastName: string;
  location: string;
  account: string;
  password: string;
}
export interface IDecodedToken {
  id?: string;
  newUser?: INewUser;
  iat: number;
  exp: number;
}
