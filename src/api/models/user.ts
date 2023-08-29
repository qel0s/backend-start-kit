/* eslint-disable import/no-extraneous-dependencies */
import { Schema, model } from 'mongoose';

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

export const UserModel = model<IUser>('User', userSchema);
