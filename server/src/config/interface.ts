import { Request } from "express";
import { Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  account: string;
  password: string;
  location: string;
  avatar: string;
  rf_token: string;
  _doc: object;
}


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

export interface IReqAuth extends Request {
  user?: IUser
}
