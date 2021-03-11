import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @ManyToMany(() => Author)
  @JoinTable({ name: 'book_author' })
  authors: Author[]
}
