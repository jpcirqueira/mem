import { Router } from 'express';

const routes = Router();

routes.get('/test', (request, response) => {
    return response.json({ message: 'test' });
});

export default routes;
