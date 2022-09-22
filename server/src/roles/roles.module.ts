import { UsersModule } from './../users/users.module';
import { Module, forwardRef } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    forwardRef(() => UsersModule)
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule { }
