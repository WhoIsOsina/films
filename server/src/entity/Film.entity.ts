import { Rate } from './Rates.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from './Comment.entity';
import { Genre } from './Genre.entity';

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
   picture: string;

   @Column()
   video: string;

   @OneToMany(() => Rate, (rate) => rate.film)
   rates: Rate[]

   @OneToMany(() => Comment, (comment) => comment.film)
   comments: Comment[]

   @ManyToMany(() => Genre)
   @JoinTable()
   genres: Genre[]
}