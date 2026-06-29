import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  phoneNumber: string;
  password?: string;
  avatar: string;
  status: string;
  lastSeen: Date;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: '' },
    status: { type: String, default: 'offline' },
    lastSeen: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
