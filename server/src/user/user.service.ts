import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.schema';

@Injectable()
export class UserService {
  private user: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAllUsers() {
    try {
      const user = await this.userModel.find().exec();
      return user;
    } catch (err) {
      throw new NotFoundException('Couund not find user');
    }
  }
  async getUserById(_id) {
    try {
      const user = await this.userModel.findById(_id).exec();
      return user;
    } catch (err) {
      throw new NotFoundException('Couund not find user');
    }
  }
  async createUser(user) {
    try {
      const newUser = new this.userModel(user);
      const result = await newUser.save();
      return result;
    } catch (err) {
      throw new NotFoundException('Couund not find user');
    }
  }

  async updateUser(_id, user) {
    try {
      const result = await this.userModel.updateOne({ _id: _id }, user).exec();
      return result;
    } catch (err) {
      throw new NotFoundException('Could not find user.');
    }
  }
  async deleteUser(_id) {
    try {
      const result = await this.userModel.deleteOne({ _id: _id }).exec();
      return result;
    } catch (err) {
      throw new NotFoundException('Could not find user.');
    }
  }
}
