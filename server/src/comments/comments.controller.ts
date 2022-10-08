import { UserLikeDto } from './dto/userLike.dto';
import { AddCommentDto } from './dto/AddComment.dto';
import { CommentsService } from './comments.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
   constructor(private commentsService: CommentsService) { }

   @Post()
   addComment(@Body() dto: AddCommentDto) {
      return this.commentsService.addComment(dto)
   }

   @Get()
   getALlComments() {
      return this.commentsService.getAllComments()
   }

   @Get(':id')
   getCommentById(@Param('id') id: number) {
      return this.commentsService.getCommentById(id)
   }

   @Get('films/:id')
   getCommentsByFilmId(@Param('id') id: number) {
      return this.commentsService.getCommentsByFilmId(id)
   }

   @Get('users/:id')
   getCommentsByUserId(@Param('id') id: number) {
      return this.commentsService.getCommentsByUserId(id)
   }

   @Put('like/:id')
   addLikeToComment(@Param('id') id: number, @Body() dto: UserLikeDto) {
      return this.commentsService.addLikeToComment(id, dto)
   }

   @Put('dislike/:id')
   addDislikeToComment(@Param('id') id: number, @Body() dto: UserLikeDto) {
      return this.commentsService.addDislikeToComment(id, dto)
   }

   @Delete(':id')
   deleteComment(@Param('id') id: number) {
      return this.commentsService.deleteComment(id)
   }
}
