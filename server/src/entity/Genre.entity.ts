import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Film } from "./Film.entity";


@Entity({ name: 'genre' })
export class Genre {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   genre: string

   @Column()
   description: string

   @ManyToMany(() => Film)
   @JoinTable()
   films: Film[]
}