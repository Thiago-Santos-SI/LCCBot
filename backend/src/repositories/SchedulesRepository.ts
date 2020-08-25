import {EntityRepository, Repository} from "typeorm";

import Schedules from "../models/Schedules";

@EntityRepository(Schedules)
class SchedulesRepository extends Repository<Schedules> {

    public async findByDate(date: Date): Promise<Schedules | null> {
        const findSchedules = await this.findOne({
            where: {date : date},
        });

        return findSchedules || null;
    }
}

export default SchedulesRepository;
