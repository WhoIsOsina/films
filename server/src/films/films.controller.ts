import { AddFilmDto } from './dto/addFilm.dto';
import { FilmsService } from './films.service';
import { Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('films')
export class FilmsController {
   constructor(private filmService: FilmsService) { }


   @Post()
   @UseInterceptors(FileFieldsInterceptor(
      [
         { name: 'picture', maxCount: 1 },
         { name: 'video', maxCount: 1 }
      ]
   ))
   addFilm(@UploadedFiles() files, @Body() dto: AddFilmDto) {
      return this.filmService.addFilm(dto, files.picture, files.video)
   }

   @Get()
   getAllFilms() {
      return this.filmService.getAllFilms()
   }

   @Get(':id')
   getFilmById(@Param('id') id: number) {
      return this.filmService.getFilmById(id)
   }
}
