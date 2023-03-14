import { FilesService, FileType } from './../files/files.service';
import { AddFilmDto } from './dto/addFilm.dto';
import { Film } from './../entity/Film.entity';
import { AppDataSource } from './../data-source';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmsService {
   private filmRepository = AppDataSource.getRepository(Film)
   constructor(private filesService: FilesService) { }

   async addFilm(dto: AddFilmDto, picture, video): Promise<Film> {
      if (picture && video) {
         const picturePath = await this.filesService.saveFile(FileType.PICTURE, picture)
         const videoPath = await this.filesService.saveFile(FileType.VIDEO, video)
         const film = await this.filmRepository.save({ ...dto, picture: picturePath, video: videoPath })
         return film;
      }
   }

   async getAllFilms(): Promise<Film[]> {
      const films = await this.filmRepository.find({ relations: { rates: true } })
      return films;
   }

   async getFilmById(id: number): Promise<Film> {
      const film = await this.filmRepository.findOne({ where: { id }, relations: { rates: true } });
      return film
   }


}
