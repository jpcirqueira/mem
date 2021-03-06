import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    const { name, email, phone, password } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, phone, password });
    return response.status(201).json(user);
});

export default usersRouter;
