import {Router} from "express";
import {parseISO} from 'date-fns'
import CreateSchedulesService from "../service/CreateSchedulesService";
import SchedulesRepository from "../repositories/SchedulesRepository";
import {getCustomRepository} from "typeorm";

const schedulesRouter = Router();
/*
criei um mpv de api de horarios para a LCC em vez de trabalhar com dados estaticos ou Json.

preciso ver como os dados dos horarios são, pra ter uma ideia de como montar os tipo de dados da nossa api

preciso saber as regras de negocio tbm.
 */


//cadastra um horario da LCC
schedulesRouter.post('/', async (req, res)=>{
    try{
        const { id, date, time } = req.body;

        const parsedDate = parseISO(date);

        const createScheduleService = new CreateSchedulesService();

        const schedule = await createScheduleService.execute({
            id,
            date,
            time
        })

        return res.json(schedule)

    }catch (e){
        return res.status(400).json({error: e.message});
    }
})

//retorna todos os horarios
schedulesRouter.get('/', async (req, res) =>{
    const schedulesRepository = getCustomRepository(SchedulesRepository);

    const schedules = await schedulesRepository.find();

    return res.json(schedules);
})

export default schedulesRouter;
