import { AddRoleDto } from './dto/addRole.dto';
import { RolesService } from './../roles/roles.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './../entity/User.entity';
import { AppDataSource } from './../data-source';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
   private userRepository = AppDataSource.getRepository(User)

   constructor(private rolesService: RolesService) { }

   async createUser(dto: CreateUserDto): Promise<User> {
      const role = await this.rolesService.getRoleByName('USER');
      const user = await this.userRepository.save({ ...dto, roles: [role] })
      return user;
   }

   async getAllUsers(): Promise<User[]> {
      const users = await this.userRepository.find({ relations: { roles: true } })
      return users;
   }

   async getUserByEmail(email: string): Promise<User> {
      const user = await this.userRepository.findOne({ where: { email }, relations: { rates: true, roles: true } })
      return user;
   }

   async getUserById(id: number): Promise<User> {
      const user = await this.userRepository.findOne({ where: { id } })
      return user
   }

   async addRole(dto: AddRoleDto): Promise<User> {
      const user = await this.userRepository.findOne({ where: { id: dto.userId }, relations: { roles: true } })
      const role = await this.rolesService.getRoleByName(dto.value)
      if (!user || !role) {
         throw new HttpException('Несуществующий пользователь или роль', HttpStatus.BAD_REQUEST)
      }

      await AppDataSource.query(`INSERT INTO users_roles_roles ("usersId", "rolesId") VALUES($1, $2)`, [user.id, role.id])
      return user
   }
}
