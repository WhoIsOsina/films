import { UserLikeDto } from './dto/userLike.dto';
import { User } from './../entity/User.entity';
import { Comment } from './../entity/Comment.entity';
import { UserLikeComment } from './../entity/UserLikeComment.entity';
import { AddCommentDto } from './dto/AddComment.dto';
import { AppDataSource } from './../data-source';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { FilmsService } from '../films/films.service';

@Injectable()
export class CommentsService {
   private commentsRepository = AppDataSource.getRepository(Comment)
   private userLikeCommentsRepository = AppDataSource.getRepository(UserLikeComment)
   constructor(private usersService: UsersService,
      private filmsService: FilmsService) { }

   async addComment(dto: AddCommentDto): Promise<Comment> {
      const user = await this.usersService.getUserById(dto.userId)
      const film = await this.filmsService.getFilmById(dto.filmId)
      const comment = await this.commentsRepository.save({ ...dto, user: user, film: film })
      return comment;
   }

   async getAllComments(): Promise<Comment[]> {
      const comments = await this.commentsRepository.find()
      return comments
   }

   async getCommentById(id: number): Promise<Comment> {
      const comment = await this.commentsRepository.findOne({ where: { id } })
      return comment;
   }

   async getCommentsByFilmId(id: number): Promise<Comment[]> {
      const comments = await this.commentsRepository.find({ where: { filmId: id }, relations: { user: true } })
      return comments;
   }

   async getCommentsByUserId(id: number): Promise<Comment[]> {
      const comments = await this.commentsRepository.find({ where: { userId: id }, relations: { film: true } })
      return comments;
   }

   async addLikeToComment(id: number, dto: UserLikeDto): Promise<Comment> {
      const comment = await this.commentsRepository.findOne({ where: { id } })
      const userLike = await this.userLikeCommentsRepository.findOne({ where: { commentId: id, userId: dto.userId } })
      console.log(userLike);
      if (userLike) {
         throw new HttpException('Вы уже оценили этот комментарий', HttpStatus.BAD_REQUEST)
      }
      const user: User = await this.usersService.getUserById(dto.userId)
      const likedComment = await this.userLikeCommentsRepository.save({ userId: user.id, commentId: id })
      const likes = comment.likes + 1;
      comment.likes = likes;
      await this.commentsRepository.update({ id: id }, { likes: likes });
      return comment;
   }

   async addDislikeToComment(id: number, dto: UserLikeDto): Promise<Comment> {
      const comment = await this.commentsRepository.findOne({ where: { id } })
      const userLike = await this.userLikeCommentsRepository.findOne({ where: { commentId: id, userId: dto.userId } })
      console.log(userLike);
      if (userLike) {
         throw new HttpException('Вы уже оценили этот комментарий', HttpStatus.BAD_REQUEST)
      }
      const user: User = await this.usersService.getUserById(dto.userId)
      const dislikedComment = await this.userLikeCommentsRepository.save({ userId: user.id, commentId: id })
      const dislikes = comment.dislikes + 1;
      comment.dislikes = dislikes;
      await this.commentsRepository.update({ id: id }, { dislikes: dislikes });
      return comment;
   }

   async deleteComment(id: number): Promise<string> {
      const comment = await this.commentsRepository.delete({ id })
      return 'deleted'
   }


}
