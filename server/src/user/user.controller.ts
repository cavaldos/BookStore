import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';

import { user_body } from 'src/interface/user';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('getallusers')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') _id: string) {
    return this.userService.getUserById(_id);
  }
  @Post('createuser')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: user_body) {
    return this.userService.createUser(user);
  }
  @Put(':id')
  updateUser(@Param('id') _id: string, @Body() user: user_body) {
    return this.userService.updateUser(_id, user);
  }
  @Delete(':id')
  deleteUser(@Param('id') _id: string) {
    return this.userService.deleteUser(_id);
  }
}
