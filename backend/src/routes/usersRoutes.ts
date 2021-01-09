import { Router, request, response } from 'express';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, phone, password } = request.body;

        return response.status(200).send();
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default usersRouter;
