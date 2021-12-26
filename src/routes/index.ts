import { Container } from 'typedi';
import { IRoute } from '../interface/routes.interface';
import { AuthRoutes } from './authRoutes';
import { authController } from '../controllers';
import { CarRoute } from './carRoutes';

// const authRoute = new AuthRoutes(authController);

const authRoute = Container.get(AuthRoutes); //dependency injection with typedi
const carRoutes = Container.get(CarRoute)
export const routes: IRoute[] = [authRoute, carRoutes ];