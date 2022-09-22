import { FilmsService } from './../films/films.service';
import { UsersService } from './../users/users.service';
import { RateFilmDto } from './dto/rateFilm.dto';
import { Rate } from './../entity/Rates.entity';
import { AppDataSource } from './../data-source';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RatingService {
   private ratingRepository = AppDataSource.getRepository(Rate)
   constructor(private usersService: UsersService,
      private filmsService: FilmsService) { }


   async userRate(dto: RateFilmDto): Promise<Rate> {
      const user = await this.usersService.getUserById(dto.userId);
      const film = await this.filmsService.getFilmById(dto.filmId)
      const rating = await this.ratingRepository.save({ rate: dto.rate, user: user, film: film, userId: user.id, filmId: film.id })
      return rating
   }

   async getRates(): Promise<Rate[]> {
      const rates = await this.ratingRepository.find()
      return rates;
   }

   async getRatesByFilmId(id: number): Promise<Rate[]> {
      const rates = await this.ratingRepository.find({ where: { filmId: id }, relations: { film: true, user: true } })
      return rates
   }

   async getRatesByUserId(id: number): Promise<Rate[]> {
      const rates = await this.ratingRepository.find({ where: { userId: id }, relations: { film: true, user: true } })
      return rates
   }
}
