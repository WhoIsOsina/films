import { Role } from './Role.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./Comment.entity";
import { Rate } from "./Rates.entity";

@Entity({ name: 'users' })
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   email: string;

   @Column()
   password: string;

   @OneToMany(() => Rate, (rate) => rate.user)
   rates: Rate[]

   @OneToMany(() => Comment, (comment) => comment.user)
   comments: Comment[]

   @ManyToMany(() => Role)
   @JoinTable()
   roles: Role[]
}