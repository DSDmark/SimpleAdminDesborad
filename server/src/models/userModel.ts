import mongoose, { Document } from "mongoose";

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

const userSchema = new mongoose.Schema({
  firstName: {
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
  rf_token: { type: String, select: false }
}, { timestamps: true });

export default mongoose.model<IUser>("user", userSchema);
