import { CreateUserDto } from './../users/dto/createUser.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) { }

   @Post('registration')
   registration(@Body() dto: CreateUserDto) {
      return this.authService.registration(dto)
   }

   @Post('login')
   login(@Body() dto: CreateUserDto) {
      return this.authService.login(dto)
   }
}
