import { User } from './../entity/User.entity';
import { CreateUserDto } from './../users/dto/createUser.dto';
import { UsersService } from './../users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'


@Injectable()
export class AuthService {
   constructor(private userService: UsersService,
      private jwtService: JwtService) { }

   async registration(dto: CreateUserDto): Promise<User> {
      const candidate = await this.userService.getUserByEmail(dto.email)
      if (candidate) {
         throw new HttpException('Пользователь с таким email уже зарегистрирован', HttpStatus.BAD_REQUEST)
      }
      const hashPassword = await bcrypt.hash(dto.password, 4);
      const user = await this.userService.createUser({ ...dto, password: hashPassword });
      return user
   }

   async login(dto: CreateUserDto): Promise<Object> {
      const user = await this.validation(dto);
      const token = this.generateToken(user)
      return token
   }

   private async validation(dto: CreateUserDto): Promise<User> {
      const user = await this.userService.getUserByEmail(dto.email)
      if (!user) {
         throw new HttpException('Неверное имя пользователя или пароль', HttpStatus.BAD_REQUEST)
      }
      const comparePassword = await bcrypt.compare(dto.password, user.password)
      if (!comparePassword) {
         throw new HttpException('Неверное имя пользователя или пароль', HttpStatus.BAD_REQUEST)
      }
      return user;
   }

   private generateToken(user: User): Object {
      const payload = { id: user.id, email: user.email, rates: user.rates, roles: user.roles };
      const token = this.jwtService.sign(payload);
      return {
         token
      }
   }
}
