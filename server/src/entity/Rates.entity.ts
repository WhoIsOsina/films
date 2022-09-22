import { Film } from './Film.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";


@Entity({ name: 'rates' })
export class Rate {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   rate: number;

   @Column()
   filmId: number

   @Column()
   userId: number

   @ManyToOne(() => User, (user) => user.rates, {
      cascade: true
   })
   @JoinColumn({ name: 'userId' })
   user: User

   @ManyToOne(() => Film, (film) => film.rates, {
      cascade: true
   })
   @JoinColumn({ name: 'filmId' })
   film: Film
}