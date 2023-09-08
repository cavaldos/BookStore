import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 25,
    },
    password: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      maxlength: 25,
    },
  },
  {
    versionKey: false,
    collection: 'users',
  },
);
export { UserSchema };

export interface User extends Document {
  username: string;
  password: string;
  email: string;
}
