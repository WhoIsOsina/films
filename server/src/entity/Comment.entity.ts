import { Film } from './Film.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity({ name: 'comments' })
export class Comment {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   userId: number;

   @Column()
   filmId: number;

   @Column()
   content: string

   @Column({ default: 0 })
   likes: number;

   @Column({ default: 0 })
   dislikes: number;

   @Column({ default: false })
   updated: boolean

   @ManyToOne(() => Film, (film) => film.comments)
   film: Film

   @ManyToOne(() => User, (user) => user.comments)
   user: User
}