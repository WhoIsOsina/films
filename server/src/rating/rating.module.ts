import { FilmsModule } from './../films/films.module';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';

@Module({
  controllers: [RatingController],
  providers: [RatingService],
  imports: [
    UsersModule,
    FilmsModule
  ]
})
export class RatingModule { }
