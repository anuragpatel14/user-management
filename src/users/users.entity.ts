import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', length: 30})
    firstName: string

    @Column({type: 'varchar', length: 30})
    lastName: string

    @Column({type: 'varchar'})
    password: string
}