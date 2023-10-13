import { Genre } from './../entity/Genre.entity';
import { AppDataSource } from './../data-source';
import { Injectable } from '@nestjs/common';
import { AddGenreDto } from './dto/addGenre.dto';

@Injectable()
export class GenresService {
   private genresRepository = AppDataSource.getRepository(Genre)

   async getAllGenres(): Promise<Genre[]> {
      const genres = await this.genresRepository.find()
      return genres
   }

   async createGenre(dto: AddGenreDto): Promise<Genre> {
      const genre = await this.genresRepository.save(dto)
      return genre
   }

   async getGenreByName(name: string): Promise<Genre> {
      name = name.charAt(0).toUpperCase() + name.slice(1)
      const genre = await this.genresRepository.findOne({ where: { genre: name } })
      return genre
   }
}
