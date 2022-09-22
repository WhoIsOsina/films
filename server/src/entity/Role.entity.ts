import { User } from './User.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'roles' })
export class Role {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ unique: true })
   role: string;

   @Column({ nullable: false })
   description: string;
}