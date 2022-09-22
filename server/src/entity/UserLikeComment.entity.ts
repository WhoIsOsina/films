import { Comment } from './Comment.entity';
import { User } from './User.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'userLikeComment' })
export class UserLikeComment {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   userId: number;

   @Column()
   commentId: number;
}