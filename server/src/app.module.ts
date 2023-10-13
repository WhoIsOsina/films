import { CfgModule } from './config.module';
import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RatingModule } from './rating/rating.module';
import { CommentsModule } from './comments/comments.module';
import { RolesModule } from './roles/roles.module';
import { GenresModule } from './genres/genres.module';
import * as path from 'path';


@Module({
   imports: [
      UsersModule,
      AuthModule,
      CfgModule,
      FilmsModule,
      FilesModule,
      ServeStaticModule.forRoot({
         rootPath: path.resolve(__dirname, 'static')
      }),
      RatingModule,
      CommentsModule,
      RolesModule,
      GenresModule
   ]
})
export class AppModule { }