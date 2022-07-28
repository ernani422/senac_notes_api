import { Router } from "express";
import UserController from './app/controller/UserController';

const routes = new Router();

/* user */
routes.post('./user/store', UserController.store);

export default routes;