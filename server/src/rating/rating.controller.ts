import { RateFilmDto } from './dto/rateFilm.dto';
import { RatingService } from './rating.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('rating')
export class RatingController {
   constructor(private ratingService: RatingService) { }

   @Post()
   userRate(@Body() dto: RateFilmDto) {
      return this.ratingService.userRate(dto)
   }

   @Get()
   getRates() {
      return this.ratingService.getRates()
   }

   @Get('film/:id')
   getRatesByFilmId(@Param('id') id: number) {
      return this.ratingService.getRatesByFilmId(id)
   }

   @Get('user/:id')
   getRatesByUserId(@Param('id') id: number) {
      return this.ratingService.getRatesByUserId(id)
   }
}
