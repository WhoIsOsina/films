import { RolesModule } from './../roles/roles.module';
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef(() => RolesModule)
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
