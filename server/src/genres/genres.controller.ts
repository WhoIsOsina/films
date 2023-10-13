import { AddGenreDto } from './dto/addGenre.dto';
import { AppDataSource } from './../data-source';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Genre } from '../entity/Genre.entity';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
   constructor(private genresService: GenresService) { }

   @Get()
   getAllGenres() {
      return this.genresService.getAllGenres()
   }

   @Post()
   addGenre(@Body() dto: AddGenreDto) {
      return this.genresService.createGenre(dto)
   }
}
