import { getRepository } from 'typeorm';
import User from '../models/user/User';

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
        // const userExist = await usersRepository.findOne({
        //     where: { email },
        // });
        // if (userExist) {
        //     throw new Error('email address already used.');
        // }
        const user = usersRepository.create({
            name,
            email,
            phone,
            password,
        });
        // console.log(user);
        // await usersRepository.save(user);

        return user;
    }
}
export default CreateUserService;
