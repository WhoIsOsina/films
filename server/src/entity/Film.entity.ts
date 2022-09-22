import { Rate } from './Rates.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from './Comment.entity';

@Entity({ name: 'films' })
export class Film {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   director: string;

   @Column()
   year: string;

   @Column()
   genre: string;

   @Column()
   picture: string;

   @Column()
   video: string;

   @OneToMany(() => Rate, (rate) => rate.film)
   rates: Rate[]

   @OneToMany(() => Comment, (comment) => comment.film)
   comments: Comment[]
}