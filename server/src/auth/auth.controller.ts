import { Controller, Body, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { user_body } from 'src/interface/user';
import { user_verify_body } from 'src/interface/user.verify';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  signIn(@Body() user: user_body, @Res() res) {
    return this.authService.signIn(user, res);
  }
  @Post('signup')
  signUp(@Body() user: user_verify_body, @Res() res) {
    return this.authService.signUp(user, res);
  }
  @Post('resetpassword')
  resetPassword(@Body() user: user_body, @Res() res) {
    return this.authService.resetPassword(user, res);
  }
}
