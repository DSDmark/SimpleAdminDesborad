import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  account: string;
  password: string;
  location: string;
  avatar: string;
  _doc: object;
}

const userSchema = new mongoose.Schema({
  firtName: {
    type: String,
    require: [true, "Enter your first name"],
    trim: true,
    maxLength: [50, 'Your name is too long']
  },
  lastName: {
    type: String,
    require: [true, "Last your last name"],
    trim: true,
    maxLength: [50, 'Your name is too long']
  },
  account: {
    type: String,
    require: [true, "Enter your email."],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    require: [true, "Enter your password"],
    minLength: [8, 'Your password is too small']
  },
  location: {
    type: String,
    require: [true, "Enter your location"],
    trim: true,
  },
  avatar: {
    type: String,
    default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
  },
}, { timestamps: true });

export default mongoose.model<IUser>("user", userSchema);
