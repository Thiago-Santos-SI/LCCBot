import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('schedules')
class Schedules {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    time: number;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    update_at: string;
}

export default Schedules;
