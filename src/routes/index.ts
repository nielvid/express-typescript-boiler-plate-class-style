import { Container } from 'typedi';
import { IRoute } from '../interface/routes.interface';
import { AuthRoutes } from './authRoutes';
import { authController } from '../controllers';

// const authRoute = new AuthRoutes(authController);

const authRoute = Container.get(AuthRoutes); //dependency injection with typedi
export const routes: IRoute[] = [authRoute];