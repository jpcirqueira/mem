import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';
import User from '../models/user/User';
import Appointment from '../models/appointment/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
    user: User;
    date: Date;
}

class CreateAppointmentService {
    public async execute({ user, date }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(
            AppointmentsRepository,
        );

        const appointmentDate = startOfHour(date);

        const appointmentInSameDate = appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (appointmentInSameDate) {
            throw Error('This appointment is already booked');
        }

        const appointment = appointmentsRepository.create({
            user,
            date,
        });

        await appointmentsRepository.save(appointment);
        return appointment;
    }
}

export default CreateAppointmentService;
