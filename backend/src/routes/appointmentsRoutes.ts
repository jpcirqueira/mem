import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import User from '../models/user/User';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAthenticated from '../middlwares/ensureAuthenticated';

const appointemntsRouter = Router();

appointemntsRouter.use(ensureAthenticated);

appointemntsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
});

appointemntsRouter.post('/', async (request, response) => {
    try {
        const { user_id, date } = request.body;

        const parsedDate = parseISO(date);
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where: { id: user_id } });
        const createAppointment = new CreateAppointmentService();
        if (!user) {
            return response.status(401).json('User not found!');
        }
        const appointment = await createAppointment.execute({
            user,
            date: parsedDate,
        });
        return response.json(appointment);
    } catch (error) {
        return response.status(400).json(error);
    }
});

export default appointemntsRouter;
