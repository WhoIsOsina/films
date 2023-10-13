import { GenresService } from './../genres/genres.service';
import { AddGenreDto } from '../genres/dto/addGenre.dto';
import { Genre } from './../entity/Genre.entity';
import { FilesService, FileType } from './../files/files.service';
import { AddFilmDto } from './dto/addFilm.dto';
import { Film } from './../entity/Film.entity';
import { AppDataSource } from './../data-source';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class FilmsService {
   private filmRepository = AppDataSource.getRepository(Film)
   constructor(private filesService: FilesService,
      private genresService: GenresService) { }

   async addFilm(dto: AddFilmDto, picture, video) {
      //console.log(dto.genre)
      if (picture && video) {
         const picturePath = await this.filesService.saveFile(FileType.PICTURE, picture)
         const videoPath = await this.filesService.saveFile(FileType.VIDEO, video)
         const genres = []
         if (typeof dto.genre === 'object') {
            dto.genre.map(async (g) => {
               await this.genresService.getGenreByName(g.genre)
            })
         } else {
            dto.genre.split(',').map(async (g) => {
               const genre = await this.genresService.getGenreByName(g)
               console.log(genre.genre);
               genres.push(genre)
            })
         }
         console.log(genres)
         const film = await this.filmRepository.save({ ...dto, picture: picturePath, video: videoPath, genres: genres })
         genres.map(async (g) => {
            await AppDataSource.query(`INSERT INTO films_genres_genre ("filmsId", "genreId") VALUES($1, $2)`, [film.id, g.id])
         })
         console.log(film)
         return film;
      }
   }

   async getAllFilms(): Promise<Film[]> {
      const films = await this.filmRepository.find({ relations: { rates: true, genres: true } })
      return films;
   }

   async getFilmById(id: number): Promise<Film> {
      const film = await this.filmRepository.findOne({ where: { id }, relations: { rates: true, genres: true } });
      return film
   }
}
