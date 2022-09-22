import { FilmsModule } from './../films/films.module';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    UsersModule,
    FilmsModule
  ]
})
export class CommentsModule { }
