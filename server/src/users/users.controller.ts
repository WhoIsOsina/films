import { AddRoleDto } from './dto/addRole.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
   constructor(private userService: UsersService) { }

   @Post()
   createUser(@Body() dto: CreateUserDto) {
      return this.userService.createUser(dto)
   }

   @Get()
   getAllUsers() {
      return this.userService.getAllUsers()
   }

   @Post('role')
   addRole(@Body() dto: AddRoleDto) {
      return this.userService.addRole(dto)
   }
}
