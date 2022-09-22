import { FilesModule } from './../files/files.module';
import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports: [FilesModule],
  exports: [FilmsService]
})
export class FilmsModule { }
