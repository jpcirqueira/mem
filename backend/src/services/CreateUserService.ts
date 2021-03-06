import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/user/User';
import AppError from '../errors/AppError';

interface Resquest {
    name: string;
    email: string;
    phone: string;
    password: string;
}

class CreateUserService {
    public async execute({
        name,
        email,
        phone,
        password,
    }: Resquest): Promise<User> {
        const usersRepository = getRepository(User);
        const userExist = await usersRepository.findOne({
            where: { email },
        });

        if (userExist) {
            throw new AppError('email address already used.', 400);
        }

        const hashedPassword = await hash(password, 8);
        const user = usersRepository.create({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        await usersRepository.save(user);
        delete user.password;
        return user;
    }
}
export default CreateUserService;
