import { Router } from 'express';
import usersRouter from './usersRoutes';
import appointemntsRouter from './appointmentsRoutes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/appointment', appointemntsRouter);

export default routes;
