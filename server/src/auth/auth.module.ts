import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      privateKey: process.env.SECRET_JWT,
      signOptions: {
        expiresIn: '25h'
      }
    }),
    UsersModule
  ]
})
export class AuthModule { }
