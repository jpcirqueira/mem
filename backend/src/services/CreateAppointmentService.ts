/* eslint-disable import/no-extraneous-dependencies */
import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';
import User from '../models/user/User';
import Appointment from '../models/appointment/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import AppError from '../errors/AppError';

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

        const appointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (appointmentInSameDate) {
            throw new AppError('This appointment is already booked', 400);
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
