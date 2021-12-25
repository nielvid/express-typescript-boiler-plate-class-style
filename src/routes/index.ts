import { IRoute } from '../interfaces/routes.interfaces';
import { AuthRoutes } from './authRoutes';
import { authController } from '../controllers';

const authRoute = new AuthRoutes(authController);

export const routes: IRoute[] = [authRoute];