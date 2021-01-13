import { Router } from 'express';
import usersRouter from './usersRoutes';
import appointemntsRouter from './appointmentsRoutes';
import sessionsRouter from './sessionsRoutes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/appointment', appointemntsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
