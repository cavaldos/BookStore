import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/models/user.schema';
import { sendEmail } from 'src/config/sendEmail';
@Injectable()
export class AuthService {
  private user: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async signIn(user, res) {
    try {
      const result = await this.userModel.findOne({ email: user.email }).exec();
      const check: boolean = result.password === user.password;
      if (check) {
        res.status(200).json({ message: 'login success' });
      } else {
        res.status(200).json({ message: 'login fail' });
      }
    } catch (err) {
      throw new NotFoundException('Could not find user.');
    }
  }
  async signUp(user, res) {
    try {
        console.log(user);
        res.status(200).json({ message: 'login success' });
    } catch (err) {
      throw new NotFoundException('Could not find user.');
    }
  }
  async resetPassword(user, res) {
    try {
      const result = await this.userModel.findOne({ email: user.email }).exec();
      return result;
    } catch (err) {
      throw new NotFoundException('Could not find user.');
    }
  }
}
