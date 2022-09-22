import { CreateroleDto } from './dto/createRole.dto';
import { RolesService } from './roles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('roles')
export class RolesController {
   constructor(private rolesService: RolesService) { }

   @Post()
   createRole(@Body() dto: CreateroleDto) {
      return this.rolesService.createRole(dto)
   }

   @Get()
   getAllRoles() {
      return this.rolesService.getAllRoles()
   }

   @Get(':role')
   getRoleByName(@Param('role') role: string) {
      return this.rolesService.getRoleByName(role)
   }
}
