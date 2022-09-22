import { UsersService } from './../users/users.service';
import { User } from './../entity/User.entity';
import { CreateroleDto } from './dto/createRole.dto';
import { Role } from './../entity/Role.entity';
import { AppDataSource } from './../data-source';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class RolesService {
   private rolesRepository = AppDataSource.getRepository(Role)

   async createRole(dto: CreateroleDto): Promise<Role> {
      const role = await this.rolesRepository.save(dto)
      return role;
   }

   async getAllRoles(): Promise<Role[]> {
      const roles = await this.rolesRepository.find()
      return roles;
   }

   async getRoleByName(value: string): Promise<Role> {
      const role = await this.rolesRepository.findOne({ where: { role: value } })
      return role;
   }

}
