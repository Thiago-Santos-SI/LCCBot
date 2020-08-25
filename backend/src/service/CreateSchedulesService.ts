import {startOfHour} from "date-fns";
import Schedules from "../models/Schedules";
import SchedulesRepository from "../repositories/SchedulesRepository";
import {getCustomRepository} from "typeorm";


interface RequestDTO {
    id: string;
    date: Date;
    time: number;
}

class CreateSchedulesService {
    public async execute({ id, date, time }: RequestDTO): Promise<Schedules> {
        const schedulesRepository = getCustomRepository(SchedulesRepository);

        const scheduleDate = startOfHour(date);

        const schedule = schedulesRepository.create({
            id,
            date,
            time
        });

        await schedulesRepository.save(schedule)

        return schedule;
    }
}

export default CreateSchedulesService
