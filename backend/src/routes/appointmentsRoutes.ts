import { Router, request, response } from 'express';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointemntsRouter = Router();

appointemntsRouter.get('/', (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = appointmentsRepository.find();

    return response.json(appointments);
});

export default appointemntsRouter;
